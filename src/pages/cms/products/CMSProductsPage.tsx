import { useEffect } from "react"
import { useProductsService } from "../../../services/products"
import { ServerError, Spinner } from "../../../shared"
import { CMSProductsList } from "./components/CMSProductsList"

export function CMSProductsPage() {
    const {state, actions} = useProductsService()

    useEffect(() => {
        actions.getProducts()
    }, [])

    return (
        <div>
            <h1 className="title">CMS</h1>

            {state.pending && <Spinner></Spinner>}
            {state.error && <ServerError message={state.error}></ServerError>}
            
            <CMSProductsList 
                items={state.products}
                activeItem={state.activeItem}
                onEditItem={actions.setActiveItem}
                onDeleteItem={actions.deleteProduct}
            />

        </div>
    )
}