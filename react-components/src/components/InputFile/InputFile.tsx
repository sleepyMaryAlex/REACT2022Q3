import React from 'react';
import './InputFile.scss';
import uploadImage from '../../assets/icons/upload.svg';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { selectDisplayErrorMessage, selectFileName, selectImage, setImage } from 'store/formSlice';

function InputFile() {
  const image = useAppSelector(selectImage);
  const fileName = useAppSelector(selectFileName);
  const displayErrorMessage = useAppSelector(selectDisplayErrorMessage);

  const dispatch = useAppDispatch();

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
      dispatch(setImage({ image: reader.result as string, fileName: file.name }));
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="file">
      <input className="input" id="input-file" type="file" onChange={onFileChange} />
      <label htmlFor="input-file" className="label">
        <img className="image" src={uploadImage} alt="upload" />
        <span>{fileName ? editFileName(fileName) : 'Upload image'}</span>
      </label>
      <p className="error-message">{displayErrorMessage && !image ? 'Please, upload image' : ''}</p>
    </div>
  );
}

export default InputFile;
