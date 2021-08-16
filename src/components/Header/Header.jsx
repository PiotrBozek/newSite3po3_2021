import React from 'react';
import './styles.css';
import flagaPl from '../../image/PlFlag.jpg';
import flagaEn from '../../image/EnFlag.jpg';

const Header = (props) => {

    return (
        <div className='pubLogo'>
            <div className='logoDivs'>           
                <span className='namePub'>Pub </span>
                <span className='name3po3'>3po3</span>  
           </div>
           <div className='phoneFlags'> 
                <div className='flags'>
                    <img  onClick={props.FlagClickPl} src={flagaPl} alt='flaga polska' />
                    <img  onClick={props.FlagClickEn} src={flagaEn} alt='flaga angielska' />
                 </div>
                <div className="headerPhone">tel. 887-333-030</div>
            </div>
               
        </div>
    )
}

export default Header
// { props.flag === 'en' ? 'activeFlag' : 'flags' }
// className = { props.flag === 'pl' ? 'activeFlag flags' : 'flags' }
