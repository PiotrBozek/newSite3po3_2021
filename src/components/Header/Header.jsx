import React from 'react';
import './styles.css';
import flagaPl from '../../image/PlFlag.jpg';
import flagaEn from '../../image/EnFlag.jpg';
import picture from '../../image/plansza.jpg'

const Header = (props) => {

    return (
        <div className='pubLogo'>
            <div className='logoDivs'>           
                <span className='namePub'>Pub </span>
                <span className='name3po3'>3po3</span>  
           </div>
           <div className='phoneFlags'> 
                <div className='flags'>
                    <img className='polishFlag'  onClick={props.FlagClickPl} src={flagaPl} alt='flaga polska' />
                    <img className='englishFlag' onClick={props.FlagClickEn} src={flagaEn} alt='flaga angielska' />
                 </div>
                <div className="headerPhone">tel. 887-333-030</div>
            </div>
               <div className='app__Header-img'>
                   <img src={picture} alt ='logo Polskiego Funduszu Rozwoju' />
               </div>
        </div>
    )
}

export default Header

