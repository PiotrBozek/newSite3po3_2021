import React from 'react';
import Header from './Header/Header';
import Search from './Search/Search';
import Products from './Products/Products';
import Information from './Information/Information';
import Coockies from './Cookies/Cookies';

import API_DATA from '../mocks/API_DATA.json';

import './App.css';
import ProductView from './ProductView/ProductView';

class App extends React.Component {

      state = {
        FETCHED_DATA: {
            Pizzas: [],
            Salad: [],
            Ingredient: [],
                },
        pizzas:[],
        salad: [],
        ingredient: [],
        choice: "pizza",
        vegetarian: false,
        addSelection: '',
        flag: 'pl',
        choiceHam: false,
        choicePeppers: false,
        choiceMushrooms: false,
        choiceSalami: false,
        coockies: true,
    }
  
  componentDidMount(){
      this.setState({
        FETCHED_DATA: API_DATA,
        pizzas: API_DATA.Pizzas,
        salad: API_DATA.Salad,
        ingredients: API_DATA.Ingredients
        })    
    }

  handleFlagClickPl = () => {
      this.setState({
        flag: 'pl'
    })
  }

  handleFlagClickEn = () => {
      this.setState({
        flag: 'en'
    })
  }

  onValueButtonPizza = () => {    
      this.setState({
        choice: 'pizza'
      });
  }

  onValueButtonSalad = () => {
      this.setState({
        choice: 'salad'
      })
}

  changeStateVege = () => {
      this.setState(prevState => ({
        vegetarian: !prevState.vegetarian
      }));
}

  changeStateHam = () => {
      this.setState(prevState =>{
        return {choiceHam: !prevState.choiceHam}
    });
  }

  changeStatePeppers = () => {
      this.setState(prevState =>{
        return {choicePeppers: !prevState.choicePeppers}
    });
  }

  changeStateMushrooms = () => {
      this.setState(prevState =>{
        return {choiceMushrooms: !prevState.choiceMushrooms}
    });
  }

  changeStateSalami = () => {
      this.setState({
        choiceSalami: !this.state.choiceSalami
    });
  }

  productView = (id) => {
      <ProductView id={id}
        products={this.state.choice === 'pizza' ? this.state.pizzas :  this.state.salad } 
      />
          // console.log(id)
  }

  changeStateCoockies = () => {
    this.setState({
      coockies: !this.state.coockies
    })
  }

render() {  
  console.log(this.state.flag)
  const {choice, choiceHam, choiceMushrooms, choicePeppers, choiceSalami, coockies, flag, pizzas, salad, vegetarian} = this.state
  return (
    <div className="App">
          <Header className="header"
              FlagClickPl={this.handleFlagClickPl} 
              FlagClickEn={this.handleFlagClickEn}  
              flag = {flag}
          />
          <Information className="information" />
          <Search    className="search"                         
              onFormSubmitPizza = {this.onValueButtonPizza} 
              onFormSubmitSalad = {this.onValueButtonSalad}
              onChangeStateVegetarian = {this.changeStateVege}
              onChangeStateHam = {this.changeStateHam}
              onChangeStatePeppers = {this.changeStatePeppers}
              onChangeStateMushrooms = {this.changeStateMushrooms}
              onChangeStateSalami = {this.changeStateSalami}
              wszystkoRazem = {this.wszystkoRazem}
              choice = {choice}
              vegetarian = {vegetarian}
              ham = {choiceHam}
              peppers = {choicePeppers}
              mushrooms = {choiceMushrooms}
              salami = {choiceSalami}
              flag={flag} 
          />

          <Products 
              className="products"
              products={choice === 'pizza' ? pizzas :  salad }
              vegetarian = {vegetarian}
              ham = {choiceHam}
              peppers = {choicePeppers}
              mushrooms = {choiceMushrooms}
              salami = {choiceSalami}
              flag={flag} 
              productView = {this.productView}
          />
          {/* <ProductView 
            products={choice === 'pizza' ? pizzas :  salad } 
          /> */}
          <footer className='footer'>B o z i k  '2 1</footer>
          {coockies === true ? <Coockies coockies={this.changeStateCoockies} />: null}
    </div>

  );}

}

export default App;
