import React from 'react';
import './Navbar.css';



const Navbar = () => {
    return (
        <div className='navbarContainer'>
            <div className='inputsWrapper'>
                <div className='inputWrapper'>
                    <input type='text' />
                    <div className='textDescription'>TEXT</div>

                </div>
                <div className='inputWrapper'>
                    <input type='text' />
                    <div className='textDescription'>TEXT</div>

                </div>
                <div className='inputWrapper'>
                    <input type='text' />
                    <div className='textDescription'>TEXT</div>

                </div>
                <div className='inputWrapper'>
                    <input type='text' />
                    <div className='textDescription'>TEXT</div>
                </div>
                <div className='inputWrapper'>
                    <input type='text' />
                    <div className='textDescription'>TEXT</div>
                </div>
                <button className='searchButton'>SEARCH</button>
            </div>
        </div>
    )
}

export default Navbar;