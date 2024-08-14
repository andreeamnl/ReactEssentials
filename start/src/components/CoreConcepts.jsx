import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts(){
    return(
        <>
            <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=>(<CoreConcept key = {conceptItem.title}{...conceptItem}/>))}
          </ul>

        </section>
        </>


    );

}