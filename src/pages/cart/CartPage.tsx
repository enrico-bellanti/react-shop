import { NavLink } from "react-router-dom"
import { selectCartIsEmpty, selectCartList, selectTotalCartCost, useCart } from "../../services/cart"

export function CartPage(){
    const list = useCart(selectCartList)
    const totalCost = useCart(selectTotalCartCost)
    const isEmpty = useCart(selectCartIsEmpty)

    const increaseQty = useCart(state => state.increaseQty)
    const decreaseQty = useCart(state => state.decreaseQty)
    return (
        <div>
            <h1 className="title">Cart</h1>
            
            <ul>
                {
                    list.map(cartItem => (
                        <li 
                            key={cartItem.product.id}
                            className="flex items-center justify-between gap-3 my-3 border-b py-3 border-blue-400"
                        >   
                            <div className="flex flex-col sm:flex-row items-center gap-3">
                                <img className="w-24 rounded-xl" src={cartItem.product.tmb} alt={cartItem.product.name} />
                                <div className="font-bold">{cartItem.product.name}</div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <div className="flex items-center gap-3">
                                    <button onClick={() => decreaseQty(cartItem.product.id)} className="btn primary">-</button>
                                    <div>{cartItem.qty}</div>
                                    <button onClick={() => increaseQty(cartItem.product.id)} className="btn primary">+</button>
                                </div>

                                <div className="w-16 text-center">
                                    $ {cartItem.qty * cartItem.product.cost}
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>

            <div className="text-4xl text-right my-4 mr-4">
                Total: $ {totalCost}
            </div>
            
            {
                !isEmpty && 
                    <div className="flex justify-center">
                        <NavLink to="/checkout" className="btn primary lg">Confirm Order</NavLink>
                    </div>
            }
        </div>
    )
}