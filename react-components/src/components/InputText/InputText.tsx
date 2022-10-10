import React from 'react';
import './InputText.css';

class InputText extends React.Component<{
  handleTitleChange: (title: string) => void;
  showTitleMessage: boolean;
}> {
  textInputRef: React.RefObject<HTMLInputElement>;
  constructor(props: { handleTitleChange: (title: string) => void; showTitleMessage: boolean }) {
    super(props);
    this.textInputRef = React.createRef();
  }

  handleChange() {
    const title = this.textInputRef.current?.value as string;
    this.props.handleTitleChange(title);
  }

  clearInputText() {
    (this.textInputRef.current as HTMLInputElement).value = '';
    this.props.handleTitleChange('');
  }

  componentDidUpdate(prevProps: IInputText) {
    if (prevProps.canClearForm !== this.props.canClearForm) {
      this.clearInputText();
    }
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
