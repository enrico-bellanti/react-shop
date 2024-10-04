import { useEffect } from 'react';
import { useOrdersService } from '../../../services/orders';

export function CMSOrdersPage() {
    const {state, actions} = useOrdersService()

    useEffect(() => {
        actions.getOrders()
    }, []);

    return (
        <div>
            {
                state.orders.map(order => {
                    return (
                        <div key={order.id}>{order.id}</div>
                    )
                })
            }
        </div>
    )

}