import { topicDTO } from "./blog.model"; 
import css from './IndividualTopic.module.css' 

export default function IndividualTopic(props: individualTopicProps){
    const buildLink = () => `/topic/${props.topic.id}` 
    return(
        <div className={css.div}>
            <a href={buildLink()}>
                <img src={props.topic.url} alt="Poster" />
            </a>
            <p>
                <a href={buildLink()}>{props.topic.name}</a>
            </p>
        </div>
    )
}

interface individualTopicProps{
    topic: topicDTO
}