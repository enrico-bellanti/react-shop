import { ChangeEvent, FormEvent, useState } from "react";
import { useAuth } from "../../../services/auth";

export function useLogin() {
    const [formData, setFormData] = useState({ username: '', password: '' })
    const login = useAuth(state => state.login)

    function changeHandler(e: ChangeEvent<HTMLInputElement>) {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        setFormData(s => ({ ...s, [name]: value }))
    }

    function doLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        login(formData.username, formData.password)
    }

    const isValid = formData.username.length && formData.password.length

    return ({
        actions: {
            changeHandler,
            doLogin
        },
        validators: {
            isValid
        },
        formData
    })
}