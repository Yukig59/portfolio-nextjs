import {getDomainLocale} from "next/dist/client/get-domain-locale";
import {redirect} from "next/navigation";

export default function Page() {
    return redirect('/fr/')

}