import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp_getBusiness from './utils/yelp';
import './App.css';

const business = {
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

let businesses = [];

function App() {

  function searchYelp(term, location, sortBy) {
    console.log(`Search Yelp with ${term}, ${location}, ${sortBy}`);
    businesses = Yelp_getBusiness(term, location, sortBy);
  }

  return (
    <div className='App'>
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App ;
