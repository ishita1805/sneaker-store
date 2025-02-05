export const genErrorMessage = (code: string, service: 'auth' | 'cart' | 'wishlist') => {
    console.log(code, service);
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