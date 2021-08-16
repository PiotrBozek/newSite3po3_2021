import React from 'react';
import './styles.css';

const Coockies = (props) => {
    return (
    <>
        <div className="cookiesText">
                Wykorzystujemy pliki cookies.  
                <a 
                    className="politicCookies"
                    href="http://jakwylaczyccookie.pl/polityka-cookie/" 
                    target="_blank"
                    rel='noreferrer'
                > polityka prywatności.</a>
                <p className="buttonCookies" onClick={props.coockies}><span>akceptuję</span></p>
        </div>
    </>
    )
}

export default Coockies
