import React from 'react';
import './styles.css';
import flagaPl from '../../image/PlFlag.jpg';
import flagaEn from '../../image/EnFlag.jpg';
import picture from '../../image/plansza.jpg'

const Header = (props) => {

    return (
        <div className='app__Header'>
            <div className='app__Header-logo'>
                <p>Pub <span>3po3</span></p>
            </div>
            <div className='app__Header-contact'>
                <p>Żagań ul. Dworcowa 31</p>
                <p>tel. 887-333-030</p>
            </div>
            <div className='app-Header-flags'>
                <img className='polishFlag'  onClick={props.FlagClickPl} src={flagaPl} alt='polish flag' />
                <img className='englishFlag' onClick={props.FlagClickEn} src={flagaEn} alt='english flag' />
            </div>
            <div className='app-Header-pfr'>
            <img src={picture} alt ='logo Polskiego Funduszu Rozwoju' />
            </div>
        </div>
    )
}

export default Header

