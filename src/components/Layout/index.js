import React from 'react';
import './Layout.css';
import axios from 'axios';
import heroku from '../../assets/Icons/heroku.svg';
import mongoDB from '../../assets/Icons/mongodb.svg';
import react from '../../assets/Icons/react.svg';
import socket from '../../assets/Icons/socket-dot-io.svg';
import node from '../../assets/Icons/node-dot-js.svg'
import javascript from '../../assets/Icons/javascript.svg'
import amazong from '../../assets/Icons/amazonaws.svg'
import html from '../../assets/Icons/html5.svg'
import webpack from '../../assets/Icons/webpack.svg'
import slackIcon from '../../assets/Icons/slack 1.svg'
import call from '../../assets/Icons/call.svg'
import resume from '../../assets/Icons/resume-and-cv.svg'
import work from '../../assets/Icons/portfolio.svg'
import facebook from '../../assets/Icons/facebook.svg'
import ins from '../../assets/Icons/instagram.svg'
import linked from '../../assets/Icons/linkedin.svg'





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
    const mapIcons = (list) => {
        return list.map((item) => {
            return (<div className='iconWrapper'>
                <img src={item} alt={item} />
            </div>)
        })
    }
    const skillsArray = ['Responsive design',
        'Costume Content',
        'Costume Images',
        'Domain & Hosting',
        'Cloud services/Api']
    const iconsArray = [heroku, mongoDB, react, socket, node, javascript, amazong, html, webpack]
    const sectorsArray = ['Design', 'Front-end', 'Back-end'];
    const contactArray = [call,work,resume];
    const socialArray = [facebook,ins,linked]
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
    const mapSkills = (list) => {
        return list.map((item) => {
            return (<div className='skillWrapper'>
                <img src={slackIcon} alt={slackIcon} />
                <div className='skillText'>{item}</div>
            </div>)
        })
    }
    const mapSectors = (list) => {
        return list.map((item) => {
            return (<div className='sectorWrapper'>
                <img src={mongoDB} alt={mongoDB} />
                <div className='sectorText'>{item}</div>
            </div>)
        })
    }
    const mapContacts = (list) => {
        return list.map((item) => {
            return (<div className='contactWrapper'>
                <img src={item} alt={item} />
            </div>)
        })
    }  
    const mapSocial = (list) => {
        return list.map((item) => {
            return (<div className='socialWrapper'>
                <img src={item} alt={item} />
            </div>)
        })
    }  
      const Intro = () => {
        return (<div className='introWrapper'>
            <h1>Hello</h1>
            <h2>MY NAME IS AMIT</h2>
            <h3>AND I'M A FULL STACK DEVELOPER</h3>
            <h5>Creative Content is what i do.</h5>
            <div className='servicesContainer'>
                <div className='icons'>{mapIcons(iconsArray)}</div>
                <div className='services'>{mapSkills(skillsArray)}</div>
                <div className='areasOfIntrest'>{mapSectors(sectorsArray)}</div>
            </div>
            <div className='contactContainer'>{mapContacts(contactArray)}</div>
            <div className='socialContainer'>{mapSocial(socialArray)}</div>


        </div>)
    }

    return (
        <div className='tryout'>
            <div className='top'></div>
            <div className='left'>
                <Intro />
            </div>
            <div className='right'>
                <div className='card'><h1>ABOUT & CV</h1></div>
                <div className='card'><h1>MY WORK</h1></div>
                <div className='card'><h1>GITHUB</h1></div>
                <div className='card'><h1>CONTACT</h1></div>
            </div>
        </div>
    )
}

export default Layout;