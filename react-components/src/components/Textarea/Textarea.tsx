import React from 'react';
import { ITextarea } from 'types/types';
import './Textarea.css';

class Textarea extends React.Component<ITextarea> {
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  constructor(props: ITextarea) {
    super(props);
    this.textareaRef = React.createRef();
  }

  handleChange() {
    const description = this.textareaRef.current?.value as string;
    this.props.handleDescriptionChange(description);
  }

  clearTextarea() {
    (this.textareaRef.current as HTMLTextAreaElement).value = '';
    this.props.handleDescriptionChange('');
  }

  componentDidUpdate(prevProps: ITextarea) {
    if (prevProps.canClearForm !== this.props.canClearForm) {
      this.clearTextarea();
    }
  }

  render() {
    return (
      <div className="form__textarea-field">
        <textarea
          placeholder="HOW TO MAKE?"
          className="form__textarea"
          ref={this.textareaRef}
          spellCheck={false}
          onChange={this.handleChange.bind(this)}
        />
        <p className="form__message textarea__message">
          {this.props.showDescriptionMessage ? 'This field is required' : ''}
        </p>
      </div>
    );
  }
}

export default Textarea;
