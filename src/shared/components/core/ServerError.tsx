export interface ServerErrorProps{
    message?: string
}

export function ServerError(props: ServerErrorProps){
    return (
        <div className="bg-red-800 text-white rounded-xl p-3 my-6">
            {props.message || 'Server error occurs!'}
        </div>
    )
}