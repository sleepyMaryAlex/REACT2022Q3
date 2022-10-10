import Checkbox from 'components/Checkbox/Checkbox';
import InputDate from 'components/InputDate/InputDate';
import InputFile from 'components/InputFile/InputFile';
import InputText from 'components/InputText/InputText';
import Modal from 'components/Modal/Modal';
import SelectCuisine from 'components/SelectCuisine/SelectCuisine';
import Switcher from 'components/Switcher/Switcher';
import Textarea from 'components/Textarea/Textarea';
import React from 'react';
import { IForm, IFormState } from 'types/types';
import './Form.css';

class Form extends React.Component<IForm, IFormState> {
  constructor(props: IForm) {
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
      canClearForm: false,
    };
  }

  checkIfItIsPossibleToSubmit() {
    if (!this.state.canCheckMistakes || this.checkForm()) {
      this.setState({ canSubmit: true });
    }
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
      this.props.handleModal(true);
      this.props.addNewRecipe(card);
      this.setState({ canClearForm: !this.state.canClearForm, canCheckMistakes: false });
      setTimeout(() => this.setState({ canSubmit: false }));
    } else {
      this.checkTitle(title);
      this.checkDate(date);
      this.checkDescription(description);
      this.checkImage(image);
      this.checkDiet(diet);
      this.checkCuisine(cuisine);
      this.setState({ canCheckMistakes: true, canSubmit: false });
    }
  }

  handleFileChange(image: string) {
    this.setState({ image, showImageMessage: false }, () => this.checkIfItIsPossibleToSubmit());
  }

  handleTitleChange(title: string) {
    this.setState({ title, showTitleMessage: false }, () => this.checkIfItIsPossibleToSubmit());
  }

  handleDescriptionChange(description: string) {
    this.setState({ description, showDescriptionMessage: false }, () =>
      this.checkIfItIsPossibleToSubmit()
    );
  }

  handleCuisineChange(cuisine: string) {
    this.setState({ cuisine, showCuisineMessage: false }, () => this.checkIfItIsPossibleToSubmit());
  }

  handleDietChange(diet: string[]) {
    this.setState({ diet, showDietMessage: false }, () => this.checkIfItIsPossibleToSubmit());
  }

  handleSwitcherChange(favorite: boolean) {
    this.setState({ favorite }, () => this.checkIfItIsPossibleToSubmit());
  }

  handleDateChange(date: string) {
    this.setState({ date, showDateMessage: false }, () => this.checkIfItIsPossibleToSubmit());
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
            canClearForm={this.state.canClearForm}
          />
          <InputFile
            handleFileChange={this.handleFileChange.bind(this)}
            showImageMessage={showImageMessage}
            canClearForm={this.state.canClearForm}
          />
          <Textarea
            handleDescriptionChange={this.handleDescriptionChange.bind(this)}
            showDescriptionMessage={showDescriptionMessage}
            canClearForm={this.state.canClearForm}
          />
          <SelectCuisine
            handleCuisineChange={this.handleCuisineChange.bind(this)}
            showCuisineMessage={showCuisineMessage}
            canClearForm={this.state.canClearForm}
          />
          <Checkbox
            handleDietChange={this.handleDietChange.bind(this)}
            showDietMessage={showDietMessage}
            canClearForm={this.state.canClearForm}
          />
          <Switcher
            handleSwitcherChange={this.handleSwitcherChange.bind(this)}
            canClearForm={this.state.canClearForm}
          />
          <InputDate
            handleDateChange={this.handleDateChange.bind(this)}
            showDateMessage={showDateMessage}
            canClearForm={this.state.canClearForm}
          />
          <input
            type="button"
            value="CREATE A RECIPE"
            disabled={!this.state.canSubmit}
            className={`submit-button${this.state.canSubmit ? '' : ' submit-button_disabled'}`}
            onClick={this.handleSubmit.bind(this)}
          />
        </div>
        {this.props.isModalOpen ? <Modal handleModal={this.props.handleModal} /> : ''}
      </form>
    );
  }
}

export default Form;
