import axios from "axios";
import { useContext, useState } from "react"; 
import { responseAuthentication, userCredentials } from "./auth.model";  
import FormAuth from "./FormAuth";
import { urlAccounts } from "../utils/endpoints";
import ShowErrors, { errorData } from "../utils/ShowErrors";
import { getClaims, saveTokenLocalStorage } from "./handleJWT";
import AuthenticationContext from "./AuthenticationContext";
import { useHistory } from "react-router-dom";

export default function Register() {
    const [errors, setErrors] = useState<errorData[]>([]); 
    const {update} = useContext(AuthenticationContext);
    const history = useHistory();
    
    async function Register(credentials: userCredentials) {
        try {
            const response = await axios
                .post<responseAuthentication>(`${urlAccounts}/create`, credentials);
                saveTokenLocalStorage(response.data);
                update(getClaims());
                history.push("/");
        } catch (error) {    
            setErrors(error.response.data); 
        }
    }
    return (
        <>
            <h3>Register</h3>
            <ShowErrors errors={errors} />
            <FormAuth model={{ email: '', password: '' }}
                onSubmit={async values => await Register(values)}
            />
        </>

    )
}