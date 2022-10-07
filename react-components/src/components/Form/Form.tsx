import Checkbox from 'components/Checkbox/Checkbox';
import InputDate from 'components/InputDate/InputDate';
import InputFile from 'components/InputFile/InputFile';
import InputText from 'components/InputText/InputText';
import SelectCuisine from 'components/SelectCuisine/SelectCuisine';
import Switcher from 'components/Switcher/Switcher';
import React from 'react';
import { IFormState, IRecipeCard } from 'types/types';
import './Form.css';

class Form extends React.Component<{ addNewRecipe: (card: IRecipeCard) => void }, IFormState> {
  constructor(props: { addNewRecipe: (card: IRecipeCard) => void }) {
    super(props);
    this.state = {
      diet: [],
      imageUrl: '',
      title: '',
      cuisine: '',
      favorite: false,
      date: '',
    };
  }

  checkTitle(title: string) {
    return title ? true : false;
  }

  checkDate(date: string) {
    return date ? true : false;
  }

  async handleSubmit() {
    const { title, imageUrl: image, cuisine, diet, favorite, date } = this.state;
    if (this.checkTitle(this.state.title) && this.checkDate(date)) {
      const card = {
        title,
        image,
        cuisine,
        favorite,
        diet,
        date,
      };
      this.props.addNewRecipe(card);
    }
  }

  handleFileChange(imageUrl: string) {
    this.setState({ imageUrl });
  }

  handleTitleChange(title: string) {
    this.setState({ title });
  }

  handleCuisineChange(cuisine: string) {
    this.setState({ cuisine });
  }

  handleDietChange(diet: string[]) {
    this.setState({ diet });
  }

  handleSwitcherChange(favorite: boolean) {
    this.setState({ favorite });
  }

  handleDateChange(date: string) {
    this.setState({ date });
  }

  render() {
    return (
      <form className="form">
        <div className="form__title">
          <h2>CREATE A RECIPE</h2>
        </div>
        <div className="form__container">
          <InputText handleTitleChange={this.handleTitleChange.bind(this)} />
          <InputFile handleFileChange={this.handleFileChange.bind(this)} />
          <SelectCuisine handleCuisineChange={this.handleCuisineChange.bind(this)} />
          <Checkbox handleDietChange={this.handleDietChange.bind(this)} />
          <Switcher handleSwitcherChange={this.handleSwitcherChange.bind(this)} />
          <InputDate handleDateChange={this.handleDateChange.bind(this)} />
          <input
            type="button"
            value="CREATE A RECIPE"
            className="submit-button"
            onClick={this.handleSubmit.bind(this)}
          />
        </div>
      </form>
    );
  }
}

export default Form;
