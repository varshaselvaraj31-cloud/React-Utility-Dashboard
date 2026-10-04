import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div className="brand-mark" aria-hidden="true">U</div>
        <div>
          <p className="eyebrow">A little utility for your day</p>
          <h1>Utility dashboard</h1>
        </div>
        <span className="header-note">01 / 02</span>
      </header>

      <section className="tools" aria-label="Utilities">
        <article className="tool-panel counter-panel">
          <div className="tool-heading">
            <span className="tool-index">01</span>
            <h2>Counter</h2>
          </div>
          <p className="tool-description">Keep a running count.</p>

          <div className="counter-display" aria-live="polite" aria-atomic="true">
            <span className="counter-value">{count}</span>
            <span className="counter-caption">CURRENT COUNT</span>
          </div>

          {count === 0 && (
            <p className="limit-message" role="status">Minimum limit reached</p>
          )}

          <div className="counter-controls">
            <button
              className="button button-secondary"
              type="button"
              onClick={() => setCount((currentCount) => Math.max(0, currentCount - 1))}
              disabled={count === 0}
            >
              <span aria-hidden="true">−</span> Decrement
            </button>
            <button
              className="button button-primary"
              type="button"
              onClick={() => setCount((currentCount) => currentCount + 1)}
            >
              <span aria-hidden="true">+</span> Increment
            </button>
            <button
              className="button button-reset"
              type="button"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </article>

        <article className="tool-panel random-panel">
          <div className="tool-heading">
            <span className="tool-index">02</span>
            <h2>Random number</h2>
          </div>
          <p className="tool-description">A fresh number, picked from 1 to 100.</p>

          <div className="random-display" aria-live="polite" aria-atomic="true">
            {randomNumber === null ? (
              <p className="empty-state">No number generated yet</p>
            ) : (
              <span className="random-value">{randomNumber}</span>
            )}
          </div>

          <button className="button button-generate" type="button" onClick={generateRandomNumber}>
            <span className="dice-mark" aria-hidden="true">↻</span>
            Generate random number
          </button>
        </article>
      </section>

      <footer className="dashboard-footer">
        <span>Two small tools. One useful space.</span>
        <span>READY WHEN YOU ARE</span>
      </footer>
    </main>
  );
}

export default App;
