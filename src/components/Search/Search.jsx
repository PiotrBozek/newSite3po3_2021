import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import './styles.css';

const Search = (props) => {

    return (
        <>
        <div className="search">
            <ButtonGroup aria-label="Toolbar with button groups">
                <button 
                    className={props.choice === 'pizza' ? "buttonRedActive" : "button_choice"}
                    variant="outline-danger"
                    onClick={props.onFormSubmitPizza}
                >
                        PIZZA
                </button>
                <button 
                        className={props.choice === 'salad' ? "buttonRedActive" : "button_choice"}
                    variant="outline-danger"
                    onClick={props.onFormSubmitSalad}
                >
                        {props.flag === 'pl' ? "SAŁATKA" : "SALAD"}
                </button>
            </ButtonGroup>{' '}
            <ButtonGroup >
                <button 
                    className ={props.vegetarian === true ? "buttonVegeActive" : "button_vege"}
                    variant="outline-success"
                        onClick={props.onChangeStateVegetarian}
                >
                        {props.flag === 'pl' ? "bez mięsa" : "no meat"}
                </button>
            </ButtonGroup>{' '}
                <button
                    className={props.ham === true ? "buttonYellowActive" : "button"}
                    variant="outline-warning"
                    onClick={props.onChangeStateHam}
                    >
                    {props.flag === 'pl' ? "szynka" : "ham"}
                </button>
                <button 
                    className={props.peppers === true ? "buttonYellowActive" : "button"}
                    variant="outline-warning"
                    onClick={props.onChangeStatePeppers}
                    >
                    {props.flag === 'pl' ? "papryka" : "peppers"}
                </button>
                <button 
                    className={props.mushrooms === true ? "buttonYellowActive" : "button"}
                    variant="outline-warning"
                    onClick={props.onChangeStateMushrooms}
                    >
                    {props.flag === 'pl' ? "pieczarki" : "champignon"}
                </button>
                <button 
                    className={props.salami === true ? "buttonYellowActive" : "button"}
                    variant="outline-warning"
                    onClick={props.onChangeStateSalami}
                >
                    salami
                </button>
                
        </div>
        </>
    )
}

export default Search
