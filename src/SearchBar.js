// JavaScript source code
import { useState } from 'react';
import './index.css';
import Routing from './LinkRouting';

/*  
SEARCH BAR FOR THE HOMEPAGE
To add new bosses to the displayed list, add a new entry to the bosses array
Do no change anything else unless necessary.    
*/
const SearchBar = () => {
    //Use state to keep track of the search input and the filtered bosses
    const [searchInput, setSearchInput] = useState("");
    const [filteredBosses, setFilteredBosses] = useState([]);
    //Array of all the bosses
    const bosses = [
        "Kalli", "Shuro Chi", "Morgeth", "Riven", "Consecrated Mind", "Sanctified Mind", "Atraks", "Taniks", "Templar",
         "Atheon", "Caretaker", "Rhulk", "Warpriest", "Golgoroth", "Daughters", "Oryx", "Explicator", "Nezerac", "Ir Yut", "Crota"
    ]
    //Function to handle the change in the search input
    let name = ""
    function handleChange(e) {
        name += e.target.value
        setSearchInput(name);
        setFilteredBosses(
            bosses.filter(boss =>
                boss.toLowerCase().includes(name.toLowerCase())
            )
        );
    }
    //Function to handle the submit of the search input
    function handleSubmit(e) {
        //console.log("submit handled")
        e.preventDefault();
        Routing(searchInput.toLowerCase());
        setSearchInput("");
    }
    //Return the UI for search bar and the list of bosses
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <input className="searchBar"
                        type="text"
                        placeholder="Enter boss name..."
                        onChange={handleChange}
                        value={searchInput}
                    />
                </div>
                <div className='container'>
                    <input className="submitButton"
                        type="submit"
                        value="Search!"
                    />
                </div>
                <style>
                    {` 
                    ::placeholder { 
                        color: white; 
                    }`
                    }
                </style>
            </form>
            {/* Display of list of bosses*/}
            <ul className="lookupTable">
                {searchInput.length === 0
                    ? bosses.map(boss => <li key={boss}>{boss}</li>)
                    : filteredBosses.map(boss =>
                        <li key={boss}>{boss}</li>)
                }
            </ul>
        </div> 
    )
}
export default SearchBar;