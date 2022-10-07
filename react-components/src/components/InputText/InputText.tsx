import React from 'react';
import './InputText.css';

class InputText extends React.Component<{ handleTitleChange: (title: string) => void }> {
  textInputRef: React.RefObject<HTMLInputElement>;
  constructor(props: { handleTitleChange: (title: string) => void }) {
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
      </div>
    );
  }
}

export default InputText;
