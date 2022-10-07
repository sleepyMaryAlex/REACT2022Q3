import RecipeCards from 'components/RecipeCards/RecipeCards';
import React from 'react';
import './Recipes.css';
import { IRecipeCard } from 'types/types';
import Form from 'components/Form/Form';

class Recipes extends React.Component<object, { cards: IRecipeCard[] }> {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: JSON.parse(localStorage.getItem('recipes') as string) || [],
    };
  }

  addNewRecipe(card: IRecipeCard) {
    const recipes = [...this.state.cards, card];
    this.setState({
      cards: recipes,
    });
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }

  render() {
    return (
      <div className="recipes">
        <Form addNewRecipe={this.addNewRecipe.bind(this)} />
        <RecipeCards cards={this.state.cards} />
      </div>
    );
  }
}

export default Recipes;
