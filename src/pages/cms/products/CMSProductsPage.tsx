import { useEffect } from "react"
import { useProductsService } from "../../../services/products"
import { ServerError, Spinner } from "../../../shared"
import { CMSProductForm } from "./components/CMSProductForm"
import { CMSProductsList } from "./components/CMSProductsList"

export function CMSProductsPage() {
    const {state, actions} = useProductsService()

    useEffect(() => {
        actions.getProducts()
    }, [])

    return (
        <div>
            <h1 className="title">Products</h1>

            {state.pending && <Spinner></Spinner>}
            {state.error && <ServerError message={state.error}></ServerError>}

            <CMSProductForm
                activeItem={state.activeItem}
                onClose={actions.resetActiveItem}
                onAdd={actions.addProduct}
                onEdit={actions.editProduct}
            />

            <CMSProductsList 
                items={state.products}
                activeItem={state.activeItem}
                onEditItem={actions.setActiveItem}
                onDeleteItem={actions.deleteProduct}
            />

            <button 
                className="btn primary"
                onClick={() => actions.setActiveItem({})}
            >
                Add New
            </button>

        </div>
    )
}