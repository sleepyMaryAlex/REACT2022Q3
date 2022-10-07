import RecipeCard from 'components/RecipeCard/RecipeCard';
import React from 'react';
import { IRecipeCard } from 'types/types';
import './RecipeCards.css';

class RecipeCards extends React.Component<{ cards: IRecipeCard[] }> {
  constructor(props: { cards: IRecipeCard[] }) {
    super(props);
  }

  render() {
    return (
      <div className="recipe-wrapper">
        <div className="recipe-cards__title">
          <h2>YOUR RECIPES</h2>
        </div>
        <div className="recipe__cards">
          {this.props.cards.length ? (
            this.props.cards.map((value) => (
              <RecipeCard card={value} key={value.title + Math.random()} />
            ))
          ) : (
            <p className="recipe__message">YOU HAVE NOT CREATED RECIPES YET</p>
          )}
        </div>
      </div>
    );
  }
}

export default RecipeCards;
