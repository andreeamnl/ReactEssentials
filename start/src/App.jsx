import componentsimg from './assets/components.png';
import { useState } from 'react';
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import  Header  from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';



function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic){
    tabContent = (<div id="tab-content">
    <h3>
      {EXAMPLES[selectedTopic].title}</h3>
    <p>
      {EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code></pre>

  </div>);
  }

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
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
          <TabButton onSelect = {() =>handleSelect('components')}>Components</TabButton>
          <TabButton onSelect = {() =>handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect = {() =>handleSelect('props')}>Props</TabButton>
          <TabButton onSelect = {() =>handleSelect('state')} >State</TabButton>

          </menu>
          {tabContent}

        </section>
      </main>
    </div>
  );
}

export default App;
