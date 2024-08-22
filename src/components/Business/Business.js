import './Business.css';

function Business({business}) {
    var newCategory = business.category;

    return (
      <div className='restaurant-container'>
        <div className='restaurant-pic-container'>
          <img className="restaurant-pic" src={business.imageSrc} />
        </div>
        <div className="info-container">
          <h3 className='restaurant-name'>{business.name}</h3>
          <div className="info-row">
            <div className='location-container'>
              <p className='info-location'>{business.address}</p>
              <p className='info-location'>{business.city}</p>
              <p className='info-location'>{business.state} {business.zipCode}</p>
            </div>
            <div className="info-review">
              <p className="food-type">{newCategory}</p>
              <p className='food-rating'>{business.rating} stars</p>
              <p className='food-reviewcount'>{business.reviewCount} reviews</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Business;