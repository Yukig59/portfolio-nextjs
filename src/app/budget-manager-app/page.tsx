import Detail from "@/components/Detail";
import data from '@/data/data.en.json'
import {Project} from "@/types/types";

export default function Page() {
    let detail:Project = data.filter((item:Project) => item.title === "Budget Manager App")[0]
    return (
        <>
            <Detail title={detail.title} description={detail.description} category={detail.category} link={detail.link} details={detail.details}/>
        </>
    )
}