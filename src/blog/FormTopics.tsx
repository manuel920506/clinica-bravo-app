import { Form, Formik, FormikHelpers } from "formik"; 
import FormGroupText from '../utils/FormGroupText'
import Button from '../utils/Button'
import { Link } from "react-router-dom";
import * as Yup from 'yup' 
import { topicDTO, topicCreationDTO } from "./blog.model";
import { useTranslation } from "react-i18next";
import FormGroupImage from "../utils/FormGroupImage";

export default function FormTopics(props: formTopicsProps) {
    const { t } = useTranslation();
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}  
            validationSchema={Yup.object({
                name: Yup.string().required(t("fieldRequired")!)
            })}
            >
            {(formikProps) => (
                <Form>
                    {/* <FormGroupImage field="photo" label="Photo" imgURL={props.model.url} />  */}
                    <FormGroupText field="name" label="Name" /> 

                    <FormGroupImage field="url" label="Photo" />

                    <Button disabled={formikProps.isSubmitting}
                        type="submit"
                    >Salvar</Button>
                    <Link className="btn btn-secondary" to="/blog">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formTopicsProps {
    model: topicCreationDTO;
    onSubmit(values: topicCreationDTO, actions: FormikHelpers<topicCreationDTO>): void;
}