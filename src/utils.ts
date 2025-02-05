/* eslint-disable @typescript-eslint/no-explicit-any */
export const genErrorMessage = (code: string, service: 'auth' | 'cart' | 'wishlist') => {
    if (service === 'wishlist') {
        switch(code) {
            case('23505'):
                return 'Product already in wishlist!'
            default: 
                return 'Something went wrong! Please try again.'
        }
    }
    return 'Something went wrong! Please try again.'
}


export const upsertCart = (cart: any[], product: any): any[] => {
    const index = cart.findIndex(item => item.id === product.id);
    if (index === -1) cart.push(product);
    else cart[index] = {
        ...cart[index],
        quantity: cart[index].quantity + 1
    };
    localStorage.setItem('cartData', JSON.stringify(cart));
    return cart;
}

export const delCart = (cart: any[], id: string): any[] => {
    const index = cart.findIndex(item => item.id === id);
    if (index === -1) return cart;
    if (cart[index].quantity === 1) return cart.splice(index, 1);
    else cart[index] = {
        ...cart[index],
        quantity: cart[index].quantity - 1
    };
    localStorage.setItem('cartData', JSON.stringify(cart));
    return cart;
}


export const updateWishlist = (w: any[], { product_id }: { product_id: string }) => {
    const wishlist = [...w, { product_id }]
    localStorage.setItem('wishlistData', JSON.stringify(wishlist));
    return wishlist;
}

export const deleteWishilist = (w: any[], { product_id }: { product_id: string }) => {
    const wishlist = w.filter(x => x['product_id'] !== product_id);
    localStorage.setItem('wishlistData', JSON.stringify(wishlist));
    return wishlist;
}