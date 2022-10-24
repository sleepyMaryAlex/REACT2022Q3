import React from 'react';
import { IInputFile } from 'types/types';
import './InputFile.css';
import uploadImage from '../../assets/icons/upload.svg';

function InputFile(props: IInputFile) {
  const { fileName, image, displayErrorMessage, setImage, setFileName } = props;

  function editFileName(fileName: string) {
    return fileName.length > 15
      ? `${fileName.split('.')[0].slice(0, 10)}...${fileName.split('.')[1]}`
      : fileName;
  }

  function onFileChange(e: React.ChangeEvent) {
    const target = e.target as HTMLInputElement;
    const reader = new FileReader();
    const file = (target.files as FileList)[0];
    reader.onloadend = () => {
      setImage(reader.result as string);
      setFileName(file.name);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="form__file-field">
      <input className="input-file" id="input-file" type="file" onChange={onFileChange} />
      <label htmlFor="input-file" className="input-file__button">
        <img className="input-file__image" src={uploadImage} alt="upload" />
        <span className="input-file__text">
          {fileName ? editFileName(fileName) : 'Upload image'}
        </span>
      </label>
      <p className="form__message">{displayErrorMessage && !image ? 'Please, upload image' : ''}</p>
    </div>
  );
}

export default InputFile;
