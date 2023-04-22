import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom"; 
import { urlTopics } from "../utils/endpoints";
import { topicCreationDTO, topicDTO } from "./blog.model";
import Loading from "../utils/charging";

export default function DetailTopic() {
    const { id }: any = useParams();
    const [topic, setTopic] = useState<topicDTO>();

    useEffect(() => {
        axios.get(`${urlTopics}/${id}`)
            .then((respuesta: AxiosResponse<topicDTO>) => { 
                setTopic(respuesta.data);
            })
    }, [id])
   
    return (
        topic ?
            <div style={{ display: 'flex' }}>
                <div>
                    <h2>{topic.name}</h2> 
                    
                    <div style={{ display: 'flex', marginTop: '1rem' }}>
                        <span style={{ display: 'inline-block', marginRight: '1rem' }}>
                            <img src={topic.url}
                                style={{ width: '225px', height: '315px' }}
                                alt="poster"
                            />
                        </span> 
                    </div>
 
                    {topic.subTopics && topic.subTopics.length > 0?
                        <div style={{ marginTop: '1rem' }}> 
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {topic.subTopics?.map(subtopic =>
                                    <div key={subtopic.id} style={{ marginBottom: '2px' }}>
                                        <img alt="foto" src={subtopic.url}
                                            style={{ width: '50px', verticalAlign: 'middle' }} />
                                        <span style={{
                                            display: 'inline-block', width: '200px',
                                            marginLeft: '1rem'
                                        }}>
                                            {subtopic.name}
                                        </span>
                                        <span style={{
                                            display: 'inline-block', width: '45x',
                                            marginLeft: '1rem'
                                        }}>
                                            {subtopic.description}
                                        </span>
                                    </div>)}
                            </div>
                        </div> : null} 

                </div>
            </div> : <Loading />
    )
}