import React from 'react'
import '../App.css';
import TopBar from '../TopBar';
import './Bosspage.css';
import BossSearchBar from './bossSearchBar';

const InvalidInput = () => {
    return (
        <div>
            <TopBar/>
            <BossSearchBar/>
            <div className='invalid'>
                 <p>Your input was not a boss that we recognize. Click on the website title or right {" "}
                    <a href="/" style = {{color:"white"}}>here</a> 
                    {" "}to return to the home page. Alternatively, use the search to find a specific boss</p>
            </div>
        </div>
    ) 
}

export default InvalidInput;
