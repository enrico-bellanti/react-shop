import clsx from "clsx";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Product } from "../../../../model/product";
import { useCloudinary } from "../../../../shared";

interface CMSProductFormProps {
    activeItem: Partial<Product> | null;
    onClose: () => void,
    onAdd: (product: Partial<Product>) => void,
    onEdit: (product: Partial<Product>) => void
}

const initialState: Partial<Product> = {
    name: '',
    cost: 0,
    description: '',
    img: '',
    tmb: ''
}

export function CMSProductForm(props: CMSProductFormProps){
    const {
        activeItem,
        onClose,
        onAdd,
        onEdit
    } = props

    useEffect(() => {
        if (activeItem?.id) {
            setFormData({...activeItem})
        } else {
            setFormData(initialState)
        }
    }, [activeItem])

    const [formData, setFormData] = useState(initialState)
    const [dirty, setDirty] = useState(false)

    const {openWidget} = useCloudinary()

    function changeHandler(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const name = e.target.name
        const value = e.target.value
        setFormData(s => ({...s, [name]: value}))
        setDirty(true)
    }

    function saveHandler(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        if (activeItem?.id) {
            //edit
            onEdit(formData)
        } else {
            //save
            onAdd(formData)
        }
    }

    function uploadHandler(){
        openWidget()
            .then(({img, tmb}) => {
                setFormData(s => ({ ...s, img, tmb }))
            })
    }

    const isNameValid =formData.name?.length
    const isCostValid = formData.cost && formData.cost > 0
    const isDescriptionValid = formData.description?.length
    const isValid = isNameValid && isCostValid && isDescriptionValid

    return (
        <div className={
            clsx(
                'fixed bg-slate-200 z-10 text-black top-0 w-96 h-full transition-all overflow-auto',
                {'-right-96': !activeItem, 'right-0': activeItem},
            )
        }>

            <form onSubmit={saveHandler}>
                <div className="flex justify-around h-16">
                    <button
                        type="submit"
                        className="w-1/2 bg-green-500 hover:bg-green-600 disabled:opacity-30"
                        disabled={!isValid}
                    >
                        SAVE
                    </button>
                    <button
                        type="button"
                        className="w-1/2 bg-slate-500 hover:bg-slate-600"
                        onClick={onClose}
                    >
                        CLOSE
                    </button>
                </div>

                {
                    formData.img && 
                        <img src={formData.img} alt={formData.name} className="w-full" />
                }

                <div className="flex flex-col gap-3 mx-3 mt-16">
                    Product Name:
                    <input 
                        type="text" 
                        name="name"
                        className={
                            clsx({'error': !isNameValid && dirty})
                        }
                        value={formData?.name} 
                        onChange={changeHandler}
                    ></input>

                    Product Cost:
                    <input 
                        type="number" 
                        name="cost"
                        className={
                            clsx({'error': !isNameValid && dirty})
                        }
                        value={formData?.cost} 
                        onChange={changeHandler}
                    ></input>

                    Description
                    <textarea 
                        name="description"
                        className={
                            clsx({'error': !isDescriptionValid && dirty})
                        }
                        value={formData?.description} 
                        onChange={changeHandler}
                    ></textarea>

                    <button className="btn primary" type="button" onClick={uploadHandler}>
                        UPLOAD IMAGE
                    </button>
                </div>
            </form>

        </div>
    )
}