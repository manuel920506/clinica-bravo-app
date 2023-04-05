import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { urlTopics } from "../utils/endpoints";
import { topicDTO } from "./blog.model";

export default function Blog(){ 
    useEffect(() => {
        axios.get(urlTopics)
        .then((response: AxiosResponse<any>) => {
            console.log(response.data);
        })

    }, [])
     return (
        <>
            <h3>Blog in construction....</h3> 
        </>

    )
}