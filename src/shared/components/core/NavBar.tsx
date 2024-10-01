import { NavLink } from "react-router-dom";
import logo from '../../../assets/react-shop-logo.png';
import { CartPanel } from "./CartPanel";

export function NavBar(){
    // const navigate = useNavigate();
    return(
        <div className="fixed top-0 left-0 right-0 shadow-2xl z-10">
            <div className="bg-slate-900 flex justify-between items-center h-20 text-white p-3">
                {/*Logo*/}
                <NavLink to=""><img src={logo} alt="react shop logo" className="w-20"/></NavLink>

                {/*Cart button badge*/}
                <div>
                    <button className="btn accent lg">
                        Cart: 0
                    </button>
                </div>

                {/*Cart Panel*/}
                <CartPanel></CartPanel>

                {/*action button*/}
                <div className="fixed bottom-2 right-2 p-5">
                    <NavLink to="login" className="btn accent lg">login</NavLink>
                    <NavLink to="cms" className="btn accent lg">cms</NavLink>
                    <button className="btn primary lg">logut</button>
                </div>
            </div>
        </div>
    )
}