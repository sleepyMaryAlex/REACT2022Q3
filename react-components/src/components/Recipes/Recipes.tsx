import RecipeCards from 'components/RecipeCards/RecipeCards';
import React from 'react';
import './Recipes.css';
import { IRecipeCard } from 'types/types';
import Form from 'components/Form/Form';

class Recipes extends React.Component<object, { cards: IRecipeCard[]; isModalOpen: boolean }> {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: JSON.parse(localStorage.getItem('recipes') as string) || [],
      isModalOpen: false,
    };
  }

  addNewRecipe(card: IRecipeCard) {
    const recipes = [...this.state.cards, card];
    this.setState({
      cards: recipes,
    });
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }

  handleModal(openModal: boolean) {
    this.setState({ isModalOpen: openModal });
  }

  render() {
    return (
      <div className={`recipes${this.state.isModalOpen ? ' recipes__overlay' : ''}`}>
        <Form
          addNewRecipe={this.addNewRecipe.bind(this)}
          isModalOpen={this.state.isModalOpen}
          handleModal={this.handleModal.bind(this)}
        />
        <RecipeCards cards={this.state.cards} />
      </div>
    );
  }
}

export default Recipes;
