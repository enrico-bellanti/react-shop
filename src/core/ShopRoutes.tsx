import { Navigate, useRoutes } from "react-router-dom";
import { CartPage } from "../pages/cart/CartPage";
import { CheckoutPage } from "../pages/checkout/CheckoutPage";
import { ThanksPage } from "../pages/checkout/ThanksPage";
import { CMSPage } from "../pages/cms/CMSPage";
import { CMSOrdersPage } from "../pages/cms/orders/CMSOrdersPage";
import { CMSProductsPage } from "../pages/cms/products/CMSProductsPage";
import { LoginPage } from "../pages/login/LoginPage";
import { ShopPage } from "../pages/shop/ShopPage";

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
            element: <CMSPage></CMSPage>,
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
                    path: '/',
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