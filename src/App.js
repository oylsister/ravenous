import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Business() {
  return (
    <div className='restaurant-container'>
      <img className="restaurant-pic" src="" />
      <div className="info-container">
        <h3 className='restaurant-name'>Ratchada Thai Food</h3>
        <div className="info-row">
          <p className='info-location'></p>
          <div className="info-review">
            <p className="food-type"></p>
            <p className='food-rating'></p>
            <p className='food-reviewcount'></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default { App, Business };
