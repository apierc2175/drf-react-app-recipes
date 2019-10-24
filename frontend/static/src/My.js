import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Recipe from '.models';

class My extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };

  }

  componentDidMount() {
    axios.get('/api/v1/recipes/')
    .then(res => {
      this.setState({recipes: res.data});
    })
    .catch(error => {
      console.log(error);
    })
  }
  render() {
    console.log(this.state.recipes);
    let recipes = this.state.recipes.map(recipe => (
      <li key={recipe.id}>
        <p>{recipe.title}</p>
        <p>{recipe.created_by}</p>
        <p>{recipe.prep_time}</p>
        <p>{recipe.cook_time}</p>
        <p>{recipe.cook_temp}</p>
        <p>{recipe.temperature_unit}</p>
        <p>{recipe.yield_amount}</p>
        <p>{recipe.yield_unit}</p>
        <p>{recipe.directions}</p>
        <p>{recipe.note}</p>
        <img src={recipe.image} alt=''/>
      </li>
    ))
    if(created_by == User) {
      return (
        <ul>
          {recipes}
        </ul>
      )
    } else {
      return (
        <h1>You have no recipes</h1>
      )
    }
  }
}

export default My;
