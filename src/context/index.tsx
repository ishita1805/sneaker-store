/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { createContext } from 'react';
import { Session, createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../../database.types'
import { toast } from 'react-toastify';
import { genErrorMessage } from '../utils';

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log(supabaseAnonKey, supabaseURL)

interface Auth {
    session: Session | null,
    signIn: () => void,
    signOut: () => void,
    fetchWishlist: () => Promise<any[] | null>,
    addToWishlist: (id: string) => Promise<number>,
    removeFromWishlist: (id: string) => Promise<number>,
    fetchCart: () => Promise<any[] | null>,
    addToCart: (id: string, size: { label: string, id: string }, gender: string) => Promise<number>,
    removeFromCart: (id: string) => Promise<number>,
    wishlist: any[],
    cart: any[],
}

const DBContext = createContext<Auth>({
    session: null,
    signIn: async () => {},
    signOut: async () => {},
    fetchWishlist: async () => {
      const response = await new Promise<any[] | null>((resolve) => {
        resolve([])
      });
      return response;
    },
    addToWishlist: async (id: string) => {
      const response = await new Promise<number>((resolve) => {
        console.log(id);
        resolve(200);
      });
      return response;
    },
    removeFromWishlist: async (id: string) => {
      const response = await new Promise<number>((resolve) => {
        console.log(id);
        resolve(200);
      });
      return response;
    },
    wishlist: [],
    cart: [],
    fetchCart: async () => {
      const response = await new Promise<any[] | null>((resolve) => {
        resolve([])
      });
      return response;
    },
    addToCart: async (id: string, size: { label: string, id: string }, gender: string) => {
      const response = await new Promise<number>((resolve) => {
        console.log(id, size, gender);
        resolve(200);
      });
      return response;
    },
    removeFromCart: async (id: string) => {
      const response = await new Promise<number>((resolve) => {
        console.log(id);
        resolve(200);
      });
      return response;
    },
});


const DBProvider = ({ children }: { children: React.ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null);
    const [wishlist, setWishlist] = useState<any[]>([]);
    const [cart, setCart] = useState<any[]>([]);
    const [supabaseClient, setSupabaseClient] = useState<SupabaseClient | null>(null);

    
    useEffect(() => {
        const client = createClient<Database>(supabaseURL, supabaseAnonKey);
        client.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
        })
        client.auth.onAuthStateChange((_event, session) => {
          setSession(session)
        })
        setSupabaseClient(client);
    }, [])

    // Fetch via APIs initially
    useEffect(() => {
      if (!supabaseClient) return;
      fetchWishlist();
      fetchCart();
    }, [supabaseClient])

   
    const signOut = async () => {
        try {
            await supabaseClient?.auth.signOut();
        } catch (e: any) {
          toast(genErrorMessage(e.code, 'auth'), { type: 'error' })
        }
    }
    
    const signIn = async () => {
        try {
          await supabaseClient?.auth.signInWithOAuth({
            provider: 'google'
          })
        } catch (e: any) {
          toast(genErrorMessage(e.code, 'auth'), { type: 'error' })
        }
    }

    const fetchWishlist = async () => {
      if (!supabaseClient) return null;
      const { data, error } = await supabaseClient.from('wishlist').select();
      setWishlist(data as any);
      if (error) {
        toast(genErrorMessage(error.code, 'wishlist'), { type: 'error' })
        return [];
      }
      return data
    }

    const addToWishlist = async (product_id: string) => {
      if (!supabaseClient) return 404;
      const { error, status } = await supabaseClient
        .from('wishlist')
        .insert({ product_id })
      setWishlist((w)=> [...w, { product_id }])
      if (error) {
        toast(genErrorMessage(error.code, 'wishlist'), { type: 'error' })
      }
      return status;
    }

    const removeFromWishlist = async (product_id: string) => {
      if (!supabaseClient) return 404;
      const { error, status } = await supabaseClient
        .from('wishlist')
        .delete()
        .eq('product_id', product_id)
      setWishlist((w)=> w.filter(x => x['product_id'] !== product_id));
      if (error) {
        toast(genErrorMessage(error.code, 'wishlist'), { type: 'error' })
      }
      return status;
    }  

    const fetchCart = async () => {
      if (!supabaseClient) return null;
      const { data, error } = await supabaseClient.from('wishlist').select();
      setCart(data as any);
      if (error) {
        toast(genErrorMessage(error.code, 'cart'), { type: 'error' })
        return [];
      }
      return data
    }

    const addToCart = async (product_id: string, size: { label: string, id: string }, gender: string) => {
      if (!supabaseClient) return 404;
      const { error, status } = await supabaseClient
          .rpc('upsert_to_cart', {
            p_gender: gender, 
            p_id: `${product_id}-${size.id}-${gender}`, 
            p_product_id: product_id, 
            p_quantity: 1,
            p_size: size.label,
          });
    
      // setCart((c)=> [...c, { product_id, size, gender }])
      if (error) {
        toast(genErrorMessage(error.code, 'cart'), { type: 'error' })
      }
      return status;
    }

    const removeFromCart = async (unique_id: string) => {
      if (!supabaseClient) return 404;
      const { error, status } = await supabaseClient
          .rpc('delete_from_cart', {
            p_id: unique_id, 
          });
      // setCart((w)=> w.filter(x => x['product_id'] !== product_id));
      if (error) {
        toast(genErrorMessage(error.code, 'cart'), { type: 'error' })
      }
      return status;
    }  

    return <DBContext.Provider value={{
      cart,
      signIn,
      signOut,
      session,
      wishlist,
      fetchCart,
      addToCart,
      fetchWishlist,
      addToWishlist,
      removeFromCart,
      removeFromWishlist,
    }}>{children}</DBContext.Provider>
}

export { DBContext, DBProvider };
