import { useNavigate } from "react-router-dom";

export function CartPanel(){
    const navigate = useNavigate();
    function gotoCart(): void {
        navigate('cart')
    }

    return (
        <div className="fixed bg-slate-800 right-4 top-24 p-3 rounded-xl shadow-2xl w-96">
            <ul className="flex flex-col gap-4">
                <li className="flex justify-between items-center border-b pb-3 border-slate-600">
                    <div>Product</div>
                    <div className="flex gap-3">
                        <div>(2 x $ 10)</div>
                        <div>$ 20</div>
                    </div>
                </li>

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