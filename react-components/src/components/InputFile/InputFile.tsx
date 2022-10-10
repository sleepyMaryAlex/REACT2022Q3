import React from 'react';
import './InputFile.css';
import uploadImage from '../../assets/icons/upload.svg';
import { IInputFile } from 'types/types';

class InputFile extends React.Component<IInputFile, { fileName: string }> {
  fileInputRef: React.RefObject<HTMLInputElement>;
  constructor(props: IInputFile) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.fileInputRef = React.createRef();
  }

  handleChange(e: React.ChangeEvent) {
    const target = e.target as HTMLInputElement;
    const reader = new FileReader();
    const file = (target.files as FileList)[0];
    reader.onloadend = () => {
      this.props.handleFileChange(reader.result as string, file.name);
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
            {this.props.fileName ? this.props.fileName : 'UPLOAD IMAGE'}
          </span>
        </label>
        <p className="form__message">{this.props.showImageMessage ? 'Please, upload image' : ''}</p>
      </div>
    );
  }
}

export default InputFile;
