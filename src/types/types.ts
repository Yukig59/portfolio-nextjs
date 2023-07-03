export type Details = {
    langages: string[];
    frameworks: string[];
    tools: string[];
    project_details: string

}
export type Card = {
    title: string;
    description: string;
    category: string;
    link: string;
}
export type Project = Card &{
    details: Details;
}