//gönderdiğin aksiyona göre sepetin son hali

import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  //gelecek olan typea göre hareket ettiğimiz nokta
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      //sepette değişiklik olduğunu göstermek iiçin referans değiştirmek gerekiyor

      if (product) {
        product.quantity++;
        return {
          ...state, // sepetin içinde varsa onları spread ile ayrıdık
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }], //sepetin içinde yoksa yeniden bir array oluşturdu ve onu ekledi. yeni referans oluşturdu
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.product.id !== payload.id),
      };

    default:
      return state;
  }
}
