import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faCloudArrowUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import "./UploadImage.css";
import Image from "../../UIElement/Image";
import { useFormContext } from "react-hook-form";

const UploadImage = (props) => {
  const { className } = props;

  const classes = `upload__image-display ${className}`;
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();

  const fileRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    /* Set value to send to form */
    props.onInput(file);

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };

    fileReader.readAsDataURL(file);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const handlePickedFile = (event) => {
    let pickedFile;

    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    }
  };

  const handlePickImage = () => {
    fileRef.current.click();
  };

  return (
    <div className="upload__image-container">
      <div className="upload__image-input">
        <input
          type="file"
          style={{ display: "none" }}
          accept=".jpg,.png,.jpeg"
          ref={fileRef}
          onChange={handlePickedFile}
        />
      </div>

      <div onClick={handlePickImage} className={classes}>
        <Image src={previewUrl || null} alt="Avatar" className="image" circle />
        <FontAwesomeIcon icon={faPlus} className="icon circle" />
      </div>
    </div>
  );
};

const UploadMultipleImages = (props) => {
  const { control } = useFormContext();
  const [files, setFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [storeFile, setStoreFile] = useState([]);

  const fileRef = useRef();

  const handlePickerFile = () => {
    fileRef.current.click();
  };

  return (
    <div className="upload__image-container">
      <div className="row">
        <div className="col-6 pr-0 pl-0">
          {/* Upload images */}
          <div className="upload__images-main-image">
            <div className="upload__images-main-image-group">
              <p>Drop files anywhere to Upload</p>
              <div className="icon-group">
                <FontAwesomeIcon icon={faCloudArrowUp} className="icon" />
              </div>

              <p>Select File</p>
              <p>At least 5 images for product</p>
            </div>
          </div>
          {/* Upload images */}
        </div>
        <div className="col-6 pr-0">
          {/* Sub images */}
          <ul className="display__list-images-list">
            <li className="display__list-images-item">
              <div className="display__list-images-item__info d-flex">
                <Image
                  src="https://images.unsplash.com/photo-1664015521235-13193b0fb560?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="Images"
                />
                <span>Name</span>
              </div>

              <FontAwesomeIcon icon={faClose} className="icon circle" />
            </li>

            <li className="display__list-images-item">
              <div className="display__list-images-item__info d-flex">
                <Image
                  src="https://images.unsplash.com/photo-1664015521235-13193b0fb560?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="Images"
                />
                <span>Name</span>
              </div>

              <FontAwesomeIcon icon={faClose} className="icon circle" />
            </li>

            <li className="display__list-images-item">
              <div className="display__list-images-item__info d-flex">
                <Image
                  src="https://images.unsplash.com/photo-1664015521235-13193b0fb560?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="Images"
                />
                <span>Name</span>
              </div>

              <FontAwesomeIcon icon={faClose} className="icon circle" />
            </li>

            <li className="display__list-images-item">
              <div className="display__list-images-item__info d-flex">
                <Image
                  src="https://images.unsplash.com/photo-1664015521235-13193b0fb560?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="Images"
                />
                <span>Name</span>
              </div>

              <FontAwesomeIcon icon={faClose} className="icon circle" />
            </li>

            <li className="display__list-images-item">
              <div className="display__list-images-item__info d-flex">
                <Image
                  src="https://images.unsplash.com/photo-1664015521235-13193b0fb560?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="Images"
                />
                <span>Name</span>
              </div>

              <FontAwesomeIcon icon={faClose} className="icon circle" />
            </li>
          </ul>
          {/* Sub images */}
        </div>
      </div>
    </div>
  );
};

export { UploadMultipleImages, UploadImage };
