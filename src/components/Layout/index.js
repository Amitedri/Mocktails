import React from 'react';
import './Layout.css';
import axios from 'axios';
import one from '../../assets/1.jpg'
import two from '../../assets/2.jpg'
import third from '../../assets/3.jpg'
import five from '../../assets/4.jpg'



const Layout = (props) => {
    const [list, setList] = React.useState();
    const [on, setOn] = React.useState(false);
    React.useEffect(() => {
        if (props.list) {
            setOn(true)
            setList(() => props.list)
            console.log(list)
        }
    }, [props])

    const ResultsPopup = () => {
        if (on) {
            return <div className='resultsPopup'>
                {list.map((item) => {
                    return <div className='fieldList'>
                        <div>{item.strDrink}</div>
                        <div>{item.strAlcoholic}</div>
                        <div>{item.strGlass}</div>
                    </div>
                })
                }
            </div>
        }

    }
    return (
        <div className='tryout'>
            <div className='top'></div>
            <div className='left'></div>
            <div className='lefttwo'>
                <div className='card'><h1>ABOUT & CV</h1></div>
                <div className='card'><h1>MY WORK</h1></div>
                <div className='card'><h1>GITHUB</h1></div>
                <div className='card'><h1>CONTACT</h1></div>

            </div>
            
            {/* {ResultsPopup()}

            <div className='column'>
                <img src={one} alt={one} />
            </div>
            <div className='column'>
                <img src={two} alt={two} />
            </div>
            <div className='column'>
                <img src={third} alt={third} />
            </div>
            <div className='column'>
                <img src={five} alt={five} />
            </div> */}
        </div>
    )
}

export default Layout;