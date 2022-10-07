import Checkbox from 'components/Checkbox/Checkbox';
import InputDate from 'components/InputDate/InputDate';
import InputFile from 'components/InputFile/InputFile';
import InputText from 'components/InputText/InputText';
import SelectCuisine from 'components/SelectCuisine/SelectCuisine';
import Switcher from 'components/Switcher/Switcher';
import Textarea from 'components/Textarea/Textarea';
import React from 'react';
import { IFormState, IRecipeCard } from 'types/types';
import './Form.css';

class Form extends React.Component<{ addNewRecipe: (card: IRecipeCard) => void }, IFormState> {
  constructor(props: { addNewRecipe: (card: IRecipeCard) => void }) {
    super(props);
    this.state = {
      diet: [],
      image: '',
      title: '',
      description: '',
      cuisine: '',
      favorite: false,
      date: '',
      showTitleMessage: false,
      showImageMessage: false,
      showDescriptionMessage: false,
      showCuisineMessage: false,
      showDietMessage: false,
      showDateMessage: false,
      canSubmit: false,
      canCheckMistakes: false,
    };
  }

  checkTitle(title: string) {
    if (title) {
      return true;
    } else {
      this.setState({ showTitleMessage: true });
      return false;
    }
  }

  checkDescription(description: string) {
    if (description) {
      return true;
    } else {
      this.setState({ showDescriptionMessage: true });
      return false;
    }
  }

  checkDate(date: string) {
    if (date) {
      return true;
    } else {
      this.setState({ showDateMessage: true });
      return false;
    }
  }

  checkImage(image: string) {
    if (image) {
      return true;
    } else {
      this.setState({ showImageMessage: true });
      return false;
    }
  }

  checkDiet(diet: string[]) {
    if (diet.length !== 0) {
      return true;
    } else {
      this.setState({ showDietMessage: true });
      return false;
    }
  }

  checkCuisine(cuisine: string) {
    if (cuisine) {
      return true;
    } else {
      this.setState({ showCuisineMessage: true });
      return false;
    }
  }

  checkForm() {
    const { title, image, cuisine, diet, date, description } = this.state;
    return (
      this.checkTitle(title) &&
      this.checkDate(date) &&
      this.checkDescription(description) &&
      this.checkImage(image) &&
      this.checkDiet(diet) &&
      this.checkCuisine(cuisine)
    );
  }

  handleSubmit() {
    const { title, image, cuisine, diet, favorite, date, description } = this.state;
    this.setState({ canCheckMistakes: true, canSubmit: false });
    this.checkTitle(title);
    this.checkDate(date);
    this.checkDescription(description);
    this.checkImage(image);
    this.checkDiet(diet);
    this.checkCuisine(cuisine);
    if (this.checkForm()) {
      const card = {
        title,
        image,
        description,
        cuisine,
        favorite,
        diet,
        date,
      };
      this.props.addNewRecipe(card);
      this.setState({ canCheckMistakes: false });
    }
  }

  handleFileChange(image: string) {
    this.setState({ image, showImageMessage: false });
    if (!this.state.canCheckMistakes || this.checkForm()) {
      this.setState({ canSubmit: true });
    }
  }

  handleTitleChange(title: string) {
    this.setState({ title, showTitleMessage: false });
    if (!this.state.canCheckMistakes || this.checkForm()) {
      this.setState({ canSubmit: true });
    }
  }

  handleDescriptionChange(description: string) {
    this.setState({ description, showDescriptionMessage: false });
    if (!this.state.canCheckMistakes || this.checkForm()) {
      this.setState({ canSubmit: true });
    }
  }

  handleCuisineChange(cuisine: string) {
    this.setState({ cuisine, showCuisineMessage: false });
    if (!this.state.canCheckMistakes || this.checkForm()) {
      this.setState({ canSubmit: true });
    }
  }

  handleDietChange(diet: string[]) {
    this.setState({ diet, showDietMessage: false });
    if (!this.state.canCheckMistakes || this.checkForm()) {
      this.setState({ canSubmit: true });
    }
  }

  handleSwitcherChange(favorite: boolean) {
    this.setState({ favorite });
    if (!this.state.canCheckMistakes || this.checkForm()) {
      this.setState({ canSubmit: true });
    }
  }

  handleDateChange(date: string) {
    this.setState({ date, showDateMessage: false });
    if (!this.state.canCheckMistakes || this.checkForm()) {
      this.setState({ canSubmit: true });
    }
  }

  render() {
    const {
      showTitleMessage,
      showDescriptionMessage,
      showImageMessage,
      showCuisineMessage,
      showDietMessage,
      showDateMessage,
    } = this.state;
    return (
      <form className="form">
        <div className="form__title">
          <h2>CREATE A RECIPE</h2>
        </div>
        <div className="form__container">
          <InputText
            handleTitleChange={this.handleTitleChange.bind(this)}
            showTitleMessage={showTitleMessage}
          />
          <InputFile
            handleFileChange={this.handleFileChange.bind(this)}
            showImageMessage={showImageMessage}
          />
          <Textarea
            handleDescriptionChange={this.handleDescriptionChange.bind(this)}
            showDescriptionMessage={showDescriptionMessage}
          />
          <SelectCuisine
            handleCuisineChange={this.handleCuisineChange.bind(this)}
            showCuisineMessage={showCuisineMessage}
          />
          <Checkbox
            handleDietChange={this.handleDietChange.bind(this)}
            showDietMessage={showDietMessage}
          />
          <Switcher handleSwitcherChange={this.handleSwitcherChange.bind(this)} />
          <InputDate
            handleDateChange={this.handleDateChange.bind(this)}
            showDateMessage={showDateMessage}
          />
          <input
            type="button"
            value="CREATE A RECIPE"
            disabled={!this.state.canSubmit}
            className={`submit-button${this.state.canSubmit ? '' : ' submit-button_disabled'}`}
            onClick={this.handleSubmit.bind(this)}
          />
        </div>
      </form>
    );
  }
}

export default Form;
