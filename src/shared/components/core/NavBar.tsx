import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../../assets/react-shop-logo.png';
import { useAuth } from "../../../services/auth";
import { selectCartIsEmpty, selectTotalCartItems, useCart, useCartPanel } from "../../../services/cart";
import { IfLogged } from "../auth/IfLogged";
import { CartPanel } from "./CartPanel";

export function NavBar(){
    const navigate = useNavigate()
    const logout = useAuth(state => state.logout)
    const isCartPanelOpen = useCartPanel(state => state.open)
    const toggleCartPanel = useCartPanel(state => state.toggle)
    const totalCartItems = useCart(selectTotalCartItems)
    const isEmpty = useCart(selectCartIsEmpty)
    
    function logoutHandler() {
        logout()
        navigate('/login')
    }

    return(
        <div className="fixed top-0 left-0 right-0 shadow-2xl z-10">
            <div className="bg-slate-900 flex justify-between items-center h-20 text-white p-3">
                {/*Logo*/}
                <NavLink to=""><img src={logo} alt="react shop logo" className="w-20"/></NavLink>

                {/*Cart button badge*/}
                <div>
                    <button disabled={isEmpty} className="btn accent lg" onClick={toggleCartPanel}>
                        Cart: {totalCartItems}
                    </button>
                </div>

                {/*Cart Panel*/}
                {isCartPanelOpen && <CartPanel></CartPanel>}

                {/*action button*/}
                <div className="fixed bottom-2 right-2 p-5">
                    <NavLink to="cms" className="btn accent lg">cms</NavLink>
                    <IfLogged else={
                        <NavLink to="login" className="btn accent lg">login</NavLink>
                    }>
                        <button onClick={logoutHandler} className="btn primary lg">logout</button>
                    </IfLogged>
                </div>
            </div>
        </div>
    )
}