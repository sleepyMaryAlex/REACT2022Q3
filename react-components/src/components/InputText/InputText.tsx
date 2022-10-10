import React from 'react';
import { IInputText } from 'types/types';
import './InputText.css';

class InputText extends React.Component<IInputText> {
  textInputRef: React.RefObject<HTMLInputElement>;
  constructor(props: IInputText) {
    super(props);
    this.textInputRef = React.createRef();
  }

  handleChange() {
    const title = this.textInputRef.current?.value as string;
    this.props.handleTitleChange(title);
  }

  render() {
    return (
      <div className="form__text-field">
        <input
          placeholder="TITLE"
          className="form__input-text"
          type="text"
          name="title"
          ref={this.textInputRef}
          autoFocus
          spellCheck={false}
          onChange={this.handleChange.bind(this)}
        />
        <p className="form__message">
          {this.props.showTitleMessage ? 'This field is required' : ''}
        </p>
      </div>
    );
  }
}

export default InputText;
