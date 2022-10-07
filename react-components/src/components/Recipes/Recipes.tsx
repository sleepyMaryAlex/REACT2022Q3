import RecipeCards from 'components/RecipeCards/RecipeCards';
import React from 'react';
import './Recipes.css';
import { IRecipeCard } from 'types/types';
import Form from 'components/Form/Form';

class Recipes extends React.Component<object, { cards: IRecipeCard[] }> {
  constructor(props: object) {
    super(props);
    this.addNewRecipe = this.addNewRecipe.bind(this);
    this.state = {
      cards: [],
    };
  }

  addNewRecipe(card: IRecipeCard) {
    this.setState({
      cards: [...this.state.cards, card],
    });
  }

  render() {
    return (
      <div className="recipes">
        <Form addNewRecipe={this.addNewRecipe} />
        <RecipeCards cards={this.state.cards} />
      </div>
    );
  }
}

export default Recipes;
