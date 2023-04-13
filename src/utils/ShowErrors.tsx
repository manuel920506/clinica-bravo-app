export default function ShowErrors(props: showErrorsProps){
    const style= {color: 'red'}

    console.log('ci sono errori: ', props.errors);

    console.log('del tipo: ', typeof props.errors);
 
    props.errors.forEach((error: errorData) => { 
        console.log(error.description);
      });

    return(
        <>
            {props.errors ? <ul style={style}>
                {props.errors.map((error, index) => <li key={index}>{error.description}</li>)}
            </ul> : null}
        </>
    )
}

interface showErrorsProps{
    errors: errorData[];
}

export interface errorData{
    code: string;
    description: string;
}