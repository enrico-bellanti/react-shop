import { create } from "zustand";
import { CartItem } from "../../model/cart-item";
import { Product } from "../../model/product";

export interface CartState {
    list: CartItem[],
    addToCart: (product: Product) => void,
    removeFromCart: (productId: string) => void,
    increaseQty: (productId: string) => void,
    decreaseQty: (productId: string) => void,
    clearCart: () => void
}

export const useCart = create<CartState>((set, get) => ({
    list: [],
    addToCart: (product: Product) => {
        const found = get().list.find(item => item.product.id === product.id)
        if (found) {
            //increase qty
            found.qty++
            set(state => ({
                list: state.list.map(item => item.product.id === found.product.id ? found : item)
            }))
        } else {
            //add product to cart
            const item: CartItem = { product, qty: 1 }
            set({
                list: [...get().list, item]
            })
        }

    },
    removeFromCart: (productId: string) => { },
    increaseQty: (productId: string) => { },
    decreaseQty: (productId: string) => { },
    clearCart: () => { }
}))