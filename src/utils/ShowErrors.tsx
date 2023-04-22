import { useState } from "react";

export default function ShowErrors(props: showErrorsProps){
    const style= {color: 'red'};
    const [errors, setErrors] = useState<any>(props);

    console.log('ci sono errori: ', props.errors);

    console.log('del tipo: ', typeof props.errors); 

    switch(typeof props.errors) { 
        case 'string': { 
            console.log(props.errors); 
           break; 
        } 
        case 'object': { 
            var objectError: any = props.errors
            setErrors(objectError.errors);
            if( objectError.length){ 
                objectError.forEach((error: errorData) => { 
                    console.log(error.description);
                  }); 
            }
            
            if(objectError.errors){  
                for (var error in objectError.errors){
                    console.log(error + ': ' + objectError.errors[error]);
               }  
            }
           break; 
        } 
        default: { 
            var _errors : errorData[] = props.errors;
            setErrors(objectError.errors);
            _errors.forEach((error: errorData) => { 
                console.log(error.description);
              }); 
           break; 
        } 
     }  
    return(
        <> 
            {props.errors ? <ul style={style}>
                { 
                 typeof props.errors === 'string' ? <li>{props.errors}</li> : 
                 typeof props.errors === 'object' && errors ? errors.map((error : any, index: number) => <li key={index}>{errors[error]}</li>)  :
                 typeof props.errors === 'object' ? null :
                 errors.map((error :errorData, index: number) => <li key={index}>{error.description}</li>)}
            </ul> : null} 
        {/* 
            {props.errors ? <ul style={style}>
                { typeof props.errors === 'string' ? <li>{props.errors}</li> : props.errors.map((error, index) => <li key={index}>{error.description}</li>)}
            </ul> : null} */}
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