import { Product } from "../../../model/product";

interface ProductCardProps{
    product: Partial<Product>,
    onAddToCart: (product: Partial<Product>) => void
}

export function ProductCard(props: ProductCardProps){
    const {product} = props
    return (
        <div 
            className="bg-white rounded-xl overflow-hidden text-black shadow-2xl"
        >
            {product.img && <img src={product.img} alt={product.name} className="h-64 w-full object-cover"/>}
            <div className="flex justify-between items-center p-3 tect-xl font-bold">
                <div>{product.name}</div>
                <div>$ {product.cost}</div>
            </div>
            <p className="p-3">{product.description}</p>

            <button
                onClick={() => props.onAddToCart(product)}
                className="text-white bg-sky-600 hover:bg-slate-400 transition w-full text-center font-bold p-3"
            >ADD TO CART</button>
        </div>
    )
}