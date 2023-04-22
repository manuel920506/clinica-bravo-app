import { Form, Formik, FormikHelpers } from "formik"; 
import * as Yup from 'yup'; 
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { userCredentials } from "./auth.model";
import { useTranslation } from "react-i18next";

export default function FormAuth(props: formularioAuthProps){
    const { t } = useTranslation();
    return (
        <Formik initialValues={props.model}
        onSubmit={props.onSubmit} 
         validationSchema={Yup.object({
             email: Yup.string().required(t("fieldRequired")!)
                .email(t("putValidEmail")!),
            password: Yup.string().required(t("fieldRequired")!)
         })}
        >
           {formikProps => (
               <Form>
                   <FormGroupText label="Email" field="email" />
                   <FormGroupText label="Password" field="password" type="password" />

                    <Button disabled={formikProps.isSubmitting} type="submit" >{t("send")}</Button> 
                    <Link className="btn btn-secondary" to="/">{t("cancel")}</Link>
               </Form>
           )} 
        </Formik>
    )
}

interface formularioAuthProps{
    model: userCredentials;
    onSubmit(values: userCredentials, actions: FormikHelpers<userCredentials>): void;
}