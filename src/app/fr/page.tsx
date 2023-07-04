import data from '@/data/data.fr.json'
import Card from "@/components/Card";
export default function Home(){
  return (
      <main className="body-font bg-nosferatu text-dracula-200">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-dracula-300 text-center text-9xl mb-5">Antonin DALKOLMO</h1>
          <p className="text-center mb-5 text-dracula-400 text-lg">Développeur Backend & Architecte logiciel | SAGAN Avocats | Paris </p>
         <hr/>
            <p className={"m-5"}>Je suis passionné par les technologies et le développement de celles ci. M&apos;améliorer continuellement est ma façon d&apos;être, donc je fais une veille afin de constamment être a jour sur les dernières technologies</p>
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