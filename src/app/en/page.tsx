import data from '@/data/data.en.json'
import Card from "@/components/Card";
export default function Home(){
  return (
      <main className="body-font bg-nosferatu text-dracula-200">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-dracula-300 text-center text-9xl mb-5">Antonin DALKOLMO</h1>
          <p className="text-center mb-5 text-dracula-400 text-lg">Backend Developper & Software Architect | SAGAN Avocats | Paris FR</p>
         <hr/>
            <p className={"m-5"}>I&apos;m passionnate about tech, and developpement. Improving myself is my nindôo, so I constantly seek for new updates or tools that can make developpement yet better.</p>
            <hr/>
          <div className="flex flex-wrap">
              {data.map((item, index) => (
                  <Card key={index} category={item.category} title={item.title} description={item.description} link={item.link}/>
              ))
              }
          </div>
        </div>
      </main>
  )
}