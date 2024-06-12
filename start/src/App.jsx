import componentsimg from './assets/components.png';
import { CORE_CONCEPTS } from "./data.js";
const ReactDescriptions = ["Crucial", "Fundamental", "Core"];

function getRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

function Header(){
  return(
    <header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {ReactDescriptions[getRandomInt(2)]} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>

  );
}

function CoreConcept(props){
  return(
    <li>
      <img src = {props.image} alt="..."></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

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
