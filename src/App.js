import logo from './logo.svg';
import './App.css';
import './Business.css';

const pizza = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

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
      <div className='restaurant-pic-container'>
        <img className="restaurant-pic" src={pizza.imageSrc} />
      </div>
      <div className="info-container">
        <h3 className='restaurant-name'>{pizza.name}</h3>
        <div className="info-row">
          <div className='location-container'>
            <p className='info-location'>{pizza.address}</p>
            <p className='info-location'>{pizza.city}</p>
            <p className='info-location'>{pizza.state} {pizza.zipCode}</p>
          </div>
          <div className="info-review">
            <p className="food-type">{pizza.category}</p>
            <p className='food-rating'>{pizza.rating}</p>
            <p className='food-reviewcount'>{pizza.reviewCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { App, Business };
