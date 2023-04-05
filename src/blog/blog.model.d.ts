export interface topicDTO {
    id: number;
    name: string;
    url: string;
    subTopics: subTopicDTO[];
}

export interface subTopicDTO {
    id: number;
    name: string;
    description: string;
}