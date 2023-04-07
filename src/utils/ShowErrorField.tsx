export default function ShowErrorField(props: showErrorField){
    return (
        <div className="text-danger">{props.message}</div>
    )
}

interface showErrorField{
    message: string;
}