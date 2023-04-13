import { Form, Formik, FormikHelpers } from "formik"; 
import * as Yup from 'yup'; 
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { userCredentials } from "./auth.model";

export default function FormAuth(props: formularioAuthProps){
    return (
        <Formik initialValues={props.model}
        onSubmit={props.onSubmit} 
         validationSchema={Yup.object({
             email: Yup.string().required('Este campo es requerido')
                .email('Debe colocar un email válido'),
            password: Yup.string().required('Este campo es requerido')
         })}
        >
           {formikProps => (
               <Form>
                   <FormGroupText label="Email" field="email" />
                   <FormGroupText label="Password" field="password" type="password" />

                    <Button disabled={formikProps.isSubmitting} type="submit">Send</Button>
                    <Link className="btn btn-secondary" to="/">Cancel</Link>

               </Form>
           )} 
        </Formik>
    )
}

interface formularioAuthProps{
    model: userCredentials;
    onSubmit(values: userCredentials, actions: FormikHelpers<userCredentials>): void;
}