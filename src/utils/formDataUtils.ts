import { topicCreationDTO } from "../blog/blog.model";

export function convertTopicToFormData(topic: topicCreationDTO): FormData {
    const formData = new FormData();

    formData.append('name', topic.name);  

    formData.append('order', String(topic.order));  

    if (topic.photo){
        formData.append('photo', topic.photo);
    } 

    if(topic.subTopics && topic.subTopics.length > 0){
        formData.append("subTopics", JSON.stringify(topic.subTopics));
    } 

    return formData;
}

function formatDate(date: Date){
    date = new Date(date);
    const formato = new Intl.DateTimeFormat("en", {
        year: 'numeric',
        month: '2-digit',
        day: "2-digit"
    });

    const [
        {value: month},,
        {value: day},,
        {value: year}
    ] = formato.formatToParts(date);

    return `${year}-${month}-${day}`;
}