import GenericList from "../utils/genericList";
import { topicDTO as topicDTO } from "./blog.model";
import IndividualTopic from "./IndividualTopic";
import css from './listFilms.module.css' 

export default function ListTopics(props: listTopicsProps){
return(
    <GenericList list={props.topics}>
        <div className={css.div}>
            {props.topics?.map(topic => <IndividualTopic topic={topic}  key = {topic.id} />)}
        </div> 
    </GenericList>
    ) 
}
interface listTopicsProps{
    topics?: topicDTO[]
}