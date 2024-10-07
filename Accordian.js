import React, { useState } from 'react';
import './App.css';

const Accordion = ({ title, content }) => {
  // Step 1: Create state to manage visibility of accordion body
  const [isOpen, setIsOpen] = useState(false);

  // Step 2: Toggle the visibility of the accordion body
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      {/* Accordion Title (Header) */}
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {/* Accordion Body (Content) */}
      <div className={`accordion-body ${isOpen ? 'open' : 'closed'}`}>
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>React Accordion</h1>
      {/* Multiple Accordion Items */}
      <Accordion title="Accordion 1" content="This is the content of Accordion 1" />
      <Accordion title="Accordion 2" content="This is the content of Accordion 2" />
      <Accordion title="Accordion 3" content="This is the content of Accordion 3" />
    </div>
  );
};

export default App;
