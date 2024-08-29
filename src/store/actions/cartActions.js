//actions >> reducerlara gönderdiğim aksiyonlar. yani bi nevi fonksiyonlar. reducer da bu durumda sepet oluyor.

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function addToCart(product){
    return{
        type : ADD_TO_CART, //action ismi bu oluyor
        payload: product //state'i yani reducer'ı etkileyecek şey
    }
}

export function removeFromCart(product){
    return{
        type : REMOVE_FROM_CART, 
        payload: product 
    }
}