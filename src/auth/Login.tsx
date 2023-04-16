import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom"; 
import AuthenticationContext from "./AuthenticationContext";
import { userCredentials, responseAuthentication } from "./auth.model";
import FormAuth from "./FormAuth";
import { saveTokenLocalStorage, getClaims } from "./handleJWT";
import ShowErrors, { errorData } from "../utils/ShowErrors";
import { urlAccounts } from "../utils/endpoints";

export default function Login() {

    const {update} = useContext(AuthenticationContext);
    const [errors, setErrors] = useState<errorData[]>([]);
    const history = useHistory();
    
    async function login(credentials: userCredentials) {
        try {
            const respuesta = await
                axios.post<responseAuthentication>(`${urlAccounts}/login`, credentials);
            
                saveTokenLocalStorage(respuesta.data);
                update(getClaims());
                history.push("/");
            console.log(respuesta);
        }
        catch (error) {
            setErrors(error.response.data);
        }
    }

    return (
        <>
            <h3>Login</h3>
            <ShowErrors errors={errors} />
            <FormAuth
                model={{ email: '', password: '' }}
                onSubmit={async values => await login(values)}
            />
        </>
    )
}