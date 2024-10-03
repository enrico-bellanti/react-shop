import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { selectAuthError, selectAuthIsLogged, useAuth } from "../../services/auth"
import { ServerError } from "../../shared"
import { useLogin } from "./hooks/useLogin"

export function LoginPage(){
    const navigate = useNavigate()
    const error = useAuth(selectAuthError)
    const isLogged = useAuth(selectAuthIsLogged)

    useEffect(() => {
        if (isLogged) {
            navigate('/cms')
        }
    }, [isLogged])

    const {
        validators,
        actions,
        formData
    } = useLogin()

    return (
        <div className="page-sm">
            <h1 className="title">Login</h1>

            {error && <ServerError></ServerError>}

            <form className="flex flex-col gap-3" onSubmit={actions.doLogin}>
                <input 
                    type="text"
                    name="username"
                    placeholder="username" 
                    onChange={actions.changeHandler} 
                    value={formData.username}
                />
                <input 
                    type="password"
                    name="password" 
                    placeholder="password" 
                    onChange={actions.changeHandler} 
                    value={formData.password}
                />
                <button disabled={!validators.isValid} className="btn primary" type="submit">Sign In</button>
            </form>
        </div>
    )
}