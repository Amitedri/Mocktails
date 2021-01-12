import React from 'react';
import './Navbar.css';
import axios from 'axios';


const Navbar = (props) => {
    
    const handleClick = async () => {
        let result = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        return props.setList(result.data['drinks'])
    }
    
    return (
        <div className='navbarContainer'>
            <div className='inputsWrapper'>
                <div className='inputWrapper'>
                    <input type='text' />
                    <div className='textDescription'>TEXT</div>

                </div>
                <div className='inputWrapper'>
                    <input type='text' />
                    <div className='textDescription'>Ingredients</div>

                </div>
                <div className='inputWrapper'>
                    <input type='text' />
                    <div className='textDescription'>Name</div>

                </div>
                <div className='inputWrapper'>
                    <input type='text' />
                    <div className='textDescription'>Category</div>
                </div>
                <div className='inputWrapper'>
                    <input type='text' />
                    <div className='textDescription'>Glass</div>
                </div>
                <div className='inputWrapper'>
                    <input type='text' />
                    <div className='textDescription'>Alcoholic</div>
                </div>
                <button className='searchButton' onClick={handleClick}>SEARCH</button>
            </div>
        </div>
    )
}

export default Navbar;