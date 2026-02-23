
import { AccordionBasic } from "./accordion"
import { CardImage } from "./card"

export default function Page() {
    return <>

        <div className="mt-10 flex flex-col items-center gap-5">
            <CardImage />
            <AccordionBasic />
        </div>

    </>
}
