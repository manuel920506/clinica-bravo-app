export interface topicDTO {
    id: number;
    name: string;
    url: string;
    subTopics: subTopicDTO[];
    order: number;
}

export interface topicCreationDTO {
    name: string;
    photo?: string; 
    subTopics?: subTopicDTO[];
    order: number;
}

export interface subTopicDTO {
    id: number;
    name: string;
    description: string;
    url: string;
    order: number;
}

export interface subTopicCreationDTO { 
    name: string;
    description: string;
    photo?: File;
    url_string?: string;
    order: number;
}