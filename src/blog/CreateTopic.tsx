import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";  
import { topicCreationDTO } from "./blog.model";
import ShowErrors from "../utils/ShowErrors";
import { errorData } from "../utils/ShowErrors";
import { urlTopics } from "../utils/endpoints";
import FormTopics from "./FormTopics";
import { convertTopicToFormData } from "../utils/formDataUtils";

export default function CreateTopic() {
     const history = useHistory();
     const [errors, setErrors] = useState<errorData[]>([]);

    async function create(topic: topicCreationDTO){
        try{ 
            console.log('JSON.stringify(topic)',JSON.stringify(topic));
            const formData = convertTopicToFormData(topic);
            // console.log('formData',formData);
            console.log('create con url: ', urlTopics);
            // await axios({
            //     method: 'post',
            //     url: urlTopics,
            //     data: formData,
            //     headers: { "Content-Type": "multipart/form-data" },
            // }).then((respuesta: AxiosResponse<number>) => {
            //     history.push(`/Blog/${respuesta.data}`);
            // })

                    await axios.post(urlTopics, topic).then((respuesta: AxiosResponse<number>) => {
                history.push(`/Blog/${respuesta.data}`);
            })
        }
        catch (error){
            setErrors(error.response.data);
        }
    }

    return (
        <>
            <h3>Crear Topic</h3>
            <ShowErrors errors={errors} />
            <FormTopics model={{name: '', order: 0}} 
                 onSubmit={async values => {
                    await create(values);
                 }}
            />
        </>
    )
}