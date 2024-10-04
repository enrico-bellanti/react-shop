import clsx from 'clsx';
import { ServerError } from '../../shared';
import { useCheckout } from './hooks/useCheckout';

export function CheckoutPage(){
    const {
        validators, actions,
        user, dirty, totalCartCost,
        error
      } = useCheckout();

    return (
        <div className="max-w-sm mx-auto">
            <h1 className="title">Checkout</h1>

            {error && <ServerError message={error}></ServerError>}
            
            <div className="text-xl my-3 border-b">$ {totalCartCost}</div>

            <form className="flex flex-col gap-3" onSubmit={actions.sendOrder}>
                Your name:
                <input 
                    type="text" 
                    placeholder="your name" 
                    value={user.name}
                    name="name"
                    onChange={actions.changeHandler}
                    className={clsx({error: !validators.isNameValid && dirty})}
                />

                Your email:
                <input 
                    type="email" 
                    placeholder="your email" 
                    value={user.email}
                    name="email"
                    className={clsx({error: !validators.isEmailValid && dirty})}
                    onChange={actions.changeHandler}
                />

                <button 
                    type="submit" 
                    className={clsx('btn', { primary: !validators.isValid, success: validators.isValid})}
                    disabled={!validators.isValid}
                >
                    Confirm Order
                </button>
            </form>
        </div>
    )
}