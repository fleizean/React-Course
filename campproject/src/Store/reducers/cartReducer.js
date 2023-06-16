import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initalValues/cartItems";

const initalState = {
    cartItems: cartItems
}

export default function cartReducer(state=initalState, {type, payload}) { // {type, payload} olan bir obje alıyoruz
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c=>c.product.productID===payload.productID)
            if (product) {
                product.quantity++;
                return {
                    ...state
                }; // yep yeni bir cartItems objesini döndürdük bu sayede referans üzerinde değişiklik yapmış olduk.
                // C# C++ örneği olarak new yapmış olduk diyebiliriz
            } else {
                return {
                    ...state,
                    cartItems:[...state.cartItems, {quantity:1, product: payload}] // birden fazla default ürün olabileceği için ...state ve cartItems birlikte kullanıldı
                };
            }    
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems:state.cartItems.filter(c=>c.product.productID === payload.product.id)
            };
        default:
            return state;
    }
}