import Image from "next/image";
import {Project} from "@/types/types";
import Link from "next/link";

export default function Detail({title, details, description, category, link}:Project) {
    return(
        <>
            <section className="text-dracula-400 body-font overflow-hidden bg-nosferatu">
               <Link href={"/"}>
                   <button
                       className="flex mx-auto mt-16 text-white bg-dracula-500 border-0 py-2 px-8 focus:outline-none hover:bg-dracula-600 rounded text-lg">Home
                   </button>
               </Link>

                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce"
                             className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                             src="https://dummyimage.com/400x400" />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-dracula-400 tracking-widest">{category}</h2>
                            <h1 className="text-dracula-300 text-3xl title-font font-medium mb-1">{title}</h1>

                            <p className="leading-relaxed text-dracula-300">{description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                                <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                                    <h2 className="font-medium title-font tracking-widest text-dracula-400 mb-4 text-sm text-center sm:text-left">Langages</h2>
                                    <nav
                                        className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                        {details.langages.map((langage, index) => (
                                            <a key={index}>
            <span
                className="bg-dracula-100 text-dracula-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{langage}
                                            </a>
                                        ))}
                                    </nav>

                                </div>
                                <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                                    <h2 className="font-medium title-font tracking-widest text-dracula-400 mb-4 text-sm text-center sm:text-left">Frameworks</h2>
                                    <nav
                                        className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                        {details.frameworks.map((framework, index) => (
                                            <a key={index}>
            <span
                className="bg-dracula-100 text-dracula-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{framework}
                                            </a>
                                        ))}
                                    </nav>

                                </div>
                                <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                                    <h2 className="font-medium title-font tracking-widest text-dracula-400 mb-4 text-sm text-center sm:text-left">Tools</h2>
                                    <nav
                                        className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                        {details.tools.map((tool, index) => (
                                            <a key={index}>
           <span
               className="bg-dracula-100 text-dracula-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{tool}
                                            </a>
                                        ))}
                                    </nav>

                                </div>

                            </div>
                            <p className="leading-relaxed text-dracula-400">{details.project_details}</p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}