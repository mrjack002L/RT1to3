import React from 'react';
import './App.css'; // Import the CSS file
import Greeting from './components/sim';
import ArrayDisplay from './components/ArrayDisplay';
import ButtonToggle from './components/ButtonToggle';
import ChildComponents from './components/ChildComponents';
import Counter from './components/Counter';
import SearchFilter from './components/SearchFilter';
import ShowHide from './components/ShowHide';
import TwoWayBinding from './components/TwoWayBinding';
import Sum from './components/Sum';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>ReactTasks</h1>
      </header>
      <main className="app-content">
        <section className="task-section">
          <h2>Task 1: Small Programming Learning Tasks</h2>
          <div className="task">
            <h3>Display Simple JSX</h3>
            <Greeting/>
          </div>
          <div className="task">
            <h3>Display Array of Records</h3>
            <ArrayDisplay />
          </div>
          <div className="task">
            <h3>Show/Hide Element</h3>
            <ShowHide />
          </div>
          <div className="task">
            <h3>Enable/Disable Button</h3>
            <ButtonToggle />
          </div>
          <div className="task">
            <h3>Two-Way Data Binding</h3>
            <TwoWayBinding />
          </div>
          <div className="task">
            <h3>Dynamically Add Child Components</h3>
            <ChildComponents />
          </div>
          <div className="task">
            <h3>Sum of Two Numbers</h3>
            <Sum />
          </div>
        </section>
        <section className="task-section">
          <h2>Task 2: Create a Counter</h2>
          <div className="task">
            <Counter />
          </div>
        </section>
        <section className="task-section">
          <h2>Task 3: Build Search Filter</h2>
          <div className="task">
            <SearchFilter />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
