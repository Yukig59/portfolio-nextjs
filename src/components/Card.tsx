import Link from "next/link";
import {Card} from "@/types/types";

export default function Card({category, title, description, link}: Card){

    return(
        <>
            <div className="p-4 lg:w-1/3">
                <div
                    className="h-full bg-dracula-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 className="tracking-widest text-xs title-font font-medium text-dracula-400 mb-1">{category.toUpperCase()}</h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-nosferatu-900 mb-3">{title}</h1>
                    <p className="leading-relaxed mb-3 text-nosferatu-900">{description}</p>
                    <Link href={link} className="text-dracula-500 inline-flex items-center">En savoir plus
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>

                </div>
            </div>
        </>
    )
}