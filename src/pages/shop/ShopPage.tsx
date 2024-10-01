import { useEffect, useState } from 'react';
import { Product } from '../../model/product';
import { pb } from '../../pocketbase';
import { ServerError, Spinner } from '../../shared';
import { ProductCard } from './components/ProductCard';

export function ShopPage(){
    const [products, setProducts] = useState<Product[]>([])
    const [pending, setPending] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        loadData()
    }, [])

    function addToCart(product: Partial<Product>){
        console.log(product);
        
    }

    function loadData(){
        setPending(true)
        pb.collection('products').getList<Product>()
        .then(res => {
          setError(false);
          setProducts(res.items);
        })
        .catch(() => setError(true))
        .finally(() => setPending(false))
    }

    return (
        <div>
            <h1 className="title">Shop</h1>
            {pending && <Spinner></Spinner>}
            {error && <ServerError></ServerError>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            {
                products.map(p => (
                    <ProductCard key={p.id} product={p} onAddToCart={addToCart}></ProductCard>
                ))
            }
            </div>

        </div>
    )
}