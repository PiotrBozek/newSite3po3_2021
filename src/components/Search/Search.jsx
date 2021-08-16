import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import './styles.css';

const Search = (props) => {

    return (
        <>
        <div className="search">
            <ButtonGroup aria-label="Toolbar with button groups">
                <Button 
                    className={props.choice === 'pizza' ? "buttonRedActive" : "button"}
                    variant="outline-danger"
                    onClick={props.onFormSubmitPizza}
                >
                        PIZZA
                </Button>
                <Button 
                    className={props.choice === 'salad' ? "buttonRedActive" : "button"}
                    variant="outline-danger"
                    onClick={props.onFormSubmitSalad}
                >
                        {props.flag === 'pl' ? "SAŁATKA" : "SALAD"}
                </Button>
            </ButtonGroup>{' '}
            <ButtonGroup >
                <Button 
                    className ={props.vegetarian === true ? "buttonVegeActive" : "button"}
                    variant="outline-success"
                        onClick={props.onChangeStateVegetarian}
                >
                        {props.flag === 'pl' ? "bez mięsa" : "no meat"}
                </Button>
            </ButtonGroup>{' '}
                <Button 
                    className={props.ham === true ? "buttonYellowActive" : "button"}
                    variant="outline-warning"
                    onClick={props.onChangeStateHam}
                    >
                    {props.flag === 'pl' ? "szynka" : "ham"}
                </Button>
                <Button 
                    className={props.peppers === true ? "buttonYellowActive" : "button"}
                    variant="outline-warning"
                    onClick={props.onChangeStatePeppers}
                    >
                    {props.flag === 'pl' ? "papryka" : "peppers"}
                </Button>
                <Button 
                    className={props.mushrooms === true ? "buttonYellowActive" : "button"}
                    variant="outline-warning"
                    onClick={props.onChangeStateMushrooms}
                    >
                    {props.flag === 'pl' ? "pieczarki" : "champignon"}
                </Button>
                <Button 
                    className={props.salami === true ? "buttonYellowActive" : "button"}
                    variant="outline-warning"
                    onClick={props.onChangeStateSalami}
                >
                    salami
                </Button>
                
        </div>
        </>
    )
}

export default Search
