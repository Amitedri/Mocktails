import React from 'react';
import './Layout.css';
import one from '../../assets/1.jpg'
import two from '../../assets/2.jpg'
import third from '../../assets/3.jpg'
import five from '../../assets/4.jpg'


const Layout = () => {
    return (
        <div className='mainLayout'>
            <div className='column'>
                <img src={one} alt={one}/>
            </div>
            <div className='column'>
                <img src={two} alt={two}/>
                <button>button</button>
            </div>
            {/* <div className='column'>
                <img src={third} alt={third}/>
            </div>
            <div className='column'>
                <img src={five} alt={five}/>
            </div> */}
        </div>
    )
}

export default Layout;