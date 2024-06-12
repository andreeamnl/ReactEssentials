import componentsimg from './assets/components.png';
import { CORE_CONCEPTS } from "./data.js";
import  Header  from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';


function App() {
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcept
            {...CORE_CONCEPTS[0]} //spread operator if value names are the same
            />
            <CoreConcept
            title = {CORE_CONCEPTS[1].title}
            description = {CORE_CONCEPTS[1].description}
            image = {CORE_CONCEPTS[1].image}
            />
            <CoreConcept
            title = {CORE_CONCEPTS[2].title}
            description = {CORE_CONCEPTS[2].description}
            image = {CORE_CONCEPTS[2].image}
            />
            <CoreConcept
            title = {CORE_CONCEPTS[3].title}
            description = {CORE_CONCEPTS[3].description}
            image = {CORE_CONCEPTS[3].image}
            />

          </ul>

        </section>
      </main>
    </div>
  );
}

export default App;
