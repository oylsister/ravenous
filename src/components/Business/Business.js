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

function Business() {
    var newCategory = pizza.category;

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
              <p className="food-type">{newCategory}</p>
              <p className='food-rating'>{pizza.rating} stars</p>
              <p className='food-reviewcount'>{pizza.reviewCount} reviews</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export { Business, pizza };