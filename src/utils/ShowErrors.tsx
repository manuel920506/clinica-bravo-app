import { useEffect, useState } from "react";

export default function ShowErrors(props: showErrorsProps){
    const style= {color: 'red'};
    const [errors, setErrors] = useState<errorData[]>([]);   
    let arr : errorData[] = [];
    
    console.log('ci sono errori: ', props.errors); 
    console.log('del tipo: ', typeof props.errors); 

    switch(typeof props.errors) { 
        case 'string': { 
            let error : errorData = {code : "" , description : props.errors}
            arr.push(error);
            console.log(props.errors);  
           break; 
        } 
        case 'object': {  
            let objectError: any = props.errors; 
            if( objectError.length){ 
                objectError.forEach((error: errorData) => { 
                    console.log(error.description); 
                    arr.push(error);
                  }); 
            }
            
            if(objectError.errors){   
                for (var error in objectError.errors){
                    console.log(error + ': ' + objectError.errors[error]);
                    let _error : errorData = {code : error, description :objectError.errors[error]};
                    arr.push(_error);
               }  
            } 
           break; 
        } 
        default: {   
            let _errors : errorData[] = props.errors;  
            _errors.forEach((error: errorData) => { 
                console.log(error.description);
                arr.push(error);
            });  
           break; 
        } 
    };
    
    useEffect(()=>{
		if(arr.length > 0){ 
            setErrors(arr);
        }
	}, [arr]);
    return(
        <> 
            {errors ? <ul style={style}>
                { errors.map((error :errorData, index: number) => <li key={index}>{error.description}</li>)}
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