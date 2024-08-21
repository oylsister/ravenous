import './SearchBar.css';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };
  

function SearchBar() {
    function renderSortByOption()
    {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let value = sortByOptions[sortByOption];
            return <li key={value}>{sortByOption}</li>;
        });
    };

    return (
        <div className='searchbar-container'>
            <div className='searchbar-option'>
                <ul>{renderSortByOption()}</ul>
            </div>
            <div className='searchbar-input'>
                <input placeholder='Search Businesses' />
                <input placeholder='Where' />
            </div>
            <div className='searchbar-submit'>
                <a>Let's Go</a>
            </div>
        </div>
    );
};

export default SearchBar;