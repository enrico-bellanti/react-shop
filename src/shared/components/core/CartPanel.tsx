import { useNavigate } from "react-router-dom";
import { useCart, useCartPanel } from "../../../services/cart";

export function CartPanel(){
    const navigate = useNavigate();
    const closeCartPanel = useCartPanel(state => state.closeOverlay)

    const list = useCart(state => state.list)

    function gotoCart(): void {
        navigate('cart')
        closeCartPanel()
    }

    return (
        <div className="fixed bg-slate-800 right-4 top-24 p-3 rounded-xl shadow-2xl w-96">
            <ul className="flex flex-col gap-4">

                {
                    list.map(cartItem => {
                        return (
                            <li key={cartItem.product.id} className="flex justify-between items-center border-b pb-3 border-slate-600">
                                <div>{cartItem.product.name}</div>
                                <div className="flex gap-3">
                                    <div>({cartItem.qty} x $ {cartItem.product.cost})</div>
                                    <div>$ {cartItem.qty * cartItem.product.cost}</div>
                                </div>
                            </li>
                        )
                    })
                }

                <div className="flex justify-end text-xl font-bold my-3">
                    Total: $ 20
                </div>

                <div className="flex justify-center">
                    <button className="btn primary" onClick={gotoCart}>Go to Cart</button>
                </div>
            </ul>
        </div>
    )
}