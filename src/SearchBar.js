// JavaScript source code
import { useState } from 'react';
import './index.css';
import Routing from './LinkRouting';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredBosses, setFilteredBosses] = useState([]);
    const bosses = [
        "Kalli", "Shuro Chi", "Morgeth", "Riven", "Consecrated Mind", "Sanctified Mind", "Atraks", "Taniks", "Templar",
         "Atheon", "Caretaker", "Rhulk", "Warpriest", "Golgoroth", "Daughters", "Oryx", "Explicator", "Nezerac", "Ir Yut", "Crota"
    ]
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
    function handleSubmit(e) {
        //console.log("submit handled")
        e.preventDefault();
        Routing(searchInput.toLowerCase());
        setSearchInput("");
    }
    
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