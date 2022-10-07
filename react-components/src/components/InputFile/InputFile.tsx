import React from 'react';
import './InputFile.css';
import uploadImage from '../../assets/icons/upload.svg';

class InputFile extends React.Component<
  { handleFileChange: (imageUrl: string) => void; showImageMessage: boolean },
  { fileName: string }
> {
  fileInputRef: React.RefObject<HTMLInputElement>;
  constructor(props: { handleFileChange: (imageUrl: string) => void; showImageMessage: boolean }) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.fileInputRef = React.createRef();
    this.state = {
      fileName: '',
    };
  }

  handleChange(e: React.ChangeEvent) {
    const target = e.target as HTMLInputElement;
    const reader = new FileReader();
    const file = (target.files as FileList)[0];
    this.setState({ fileName: file.name });
    reader.onloadend = () => {
      this.props.handleFileChange(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div className="form__file-field">
        <input
          className="input-file"
          type="file"
          ref={this.fileInputRef}
          id="input-file"
          onChange={this.handleChange}
        />
        <label htmlFor="input-file" className="input-file__button">
          <img className="input-file__image" src={uploadImage} alt="upload" />
          <span className="input-file__text">
            {this.state.fileName ? this.state.fileName : 'UPLOAD IMAGE'}
          </span>
        </label>
        <p className="form__message">{this.props.showImageMessage ? 'Please, upload image' : ''}</p>
      </div>
    );
  }
}

export default InputFile;
