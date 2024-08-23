import { useState } from 'react';
import './SearchBar.css';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };
  

function SearchBar({ searchYelp }) {
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sortBy, setSortBy] = useState("best_match");

    function getSortByClass(sortByOption)
    {
        if(sortBy === sortByOption)
            return "active";
    
        return "";
    }

    const handleSortByChange = (option) => {
        setSortBy(option);
    }

    function handleSearch(event) {
        event.preventDefault();
        searchYelp(term, location, sortBy);
    }

    function handleTermChange(event) {
        setTerm(event.target.value);
    }

    function handleLocationChange(event) {
        setLocation(event.target.value);
    }

    function renderSortByOption()
    {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let value = sortByOptions[sortByOption];
            return <li className={getSortByClass(value)} key={value} onClick={() => handleSortByChange(value)}>{sortByOption}</li>;
        });
    };

    return (
        <div className='searchbar-container'>
            <div className='searchbar-option'>
                <ul>{renderSortByOption()}</ul>
            </div>
            <form onSubmit={handleSearch}>
                <div className='searchbar-input'>
                    <input placeholder='Search Businesses' onChange={handleTermChange} />
                    <input placeholder='Where' onChange={handleLocationChange} />
                </div>
                <div className='searchbar-submit'>
                    <button type="submit">Let's Go</button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;