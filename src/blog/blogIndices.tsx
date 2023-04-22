import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { urlTopics } from "../utils/endpoints";
import { topicDTO } from "./blog.model";
import { Button } from "react-bootstrap";
import Authorized from "../auth/Authorized"; 
import { Link } from "react-router-dom";

export default function Blog(){ 
    const [topics, setTopics] = useState<topicDTO>()

    useEffect(() => {
        loadData();
    }, [])

    function loadData() {
        axios.get(urlTopics)
        .then((response: AxiosResponse<topicDTO>) => {
            console.log(response.data);
            setTopics(response.data);
        })
    }  
     return (
        <>
            <h3>Blog in construction....</h3> 
            <div className='container'>  
                <Authorized authorized={<><Link className="btn btn-primary" to="/blog/create">+</Link></>}/>
            </div>
        </>

    )
}