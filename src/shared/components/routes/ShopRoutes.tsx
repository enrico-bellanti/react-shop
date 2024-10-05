import { Navigate, useRoutes } from "react-router-dom";
import { CartPage, CheckoutPage, CMSOrdersPage, CMSPage, CMSProductsPage, LoginPage, ShopPage, ThanksPage } from "../../../pages";
import { PrivateRoute } from "../auth/PrivateRoute";

export function ShopRoutes(){
    return  useRoutes([
        {
            path: 'shop',
            element: <ShopPage></ShopPage>
        },
        {
            path: 'cart',
            element: <CartPage></CartPage>
        },
        {
            path: 'checkout',
            element: <CheckoutPage></CheckoutPage>
        },
        {
            path: 'thankyou',
            element: <ThanksPage></ThanksPage>
        },
        {
            path: 'login',
            element: <LoginPage></LoginPage>
        },
        {
            path: 'cms',
            element: <PrivateRoute><CMSPage></CMSPage></PrivateRoute>,
            children: [
                {
                    path: 'products',
                    element: <CMSProductsPage></CMSProductsPage>
                },
                {
                    path: 'orders',
                    element: <CMSOrdersPage></CMSOrdersPage>
                },
                {
                    path: '',
                    element: <Navigate to="products"></Navigate>
                }
            ]
        },
        {
            path: '/',
            element: <Navigate to="shop"></Navigate>
        },
        {
            path: '*',
            element: <Navigate to="/"></Navigate>
        },
    ])
}