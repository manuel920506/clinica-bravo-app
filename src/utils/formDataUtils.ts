import { topicCreationDTO } from "../blog/blog.model";

export function convertTopicToFormData(topic: topicCreationDTO): FormData {
    const formData = new FormData();

    formData.append('name', topic.name);  
    // formData.append('order', String(topic.order));  

    // if (topic.url){
    //     formData.append('url', topic.url);
    // } 

    // formData.append("subTopics", JSON.stringify(topic.subTopics));

      formData.append('order', '5');  


    // formData.append("subTopics", JSON.stringify({name : 'namequalsiasi'}));

    console.log('formData inner convert.... :', formData);
    return formData;
}

function formatearFecha(date: Date){
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