import React from 'react';
import { IRecipeCard } from 'types/types';
import './RecipeCard.css';

class RecipeCard extends React.Component<{ card: IRecipeCard }> {
  constructor(props: { card: IRecipeCard }) {
    super(props);
  }

  render() {
    const { image, title, cuisine, diet, favorite, date } = this.props.card;
    return (
      <div className="recipe-card">
        <img src={image} alt="recipe" />
        <div className="recipe-card__content">
          <p>
            <span>TITLE:</span>
            {title.toLowerCase()}
          </p>
          <p>
            <span>CUISINE:</span>
            {cuisine.toLowerCase()}
          </p>
          <p>
            <span>DIET:</span>
            {diet.join(', ').toLowerCase()}
          </p>
          <p>
            <span>FAVORITE:</span>
            {favorite ? 'yes' : 'no'}
          </p>
          <p>
            <span>CREATED:</span>
            {new Date(date).toLocaleString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
