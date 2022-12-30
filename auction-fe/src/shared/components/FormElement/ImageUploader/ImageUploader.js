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

  const { register } = useFormContext();

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
          {...register("images")}
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
  const { register } = useFormContext();
  const [previewUrls, setPreviewUrls] = useState([]);

  const handlePickerFile = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.multiple = true;
    fileInput.accept = "image/*";
    fileInput.click();

    fileInput.onchange = (e) => {
      setPreviewUrls(Array.from(e.target.files));
    };
  };

  const handleRemoveImage = (input) => {
    setPreviewUrls((urls) => urls.filter((url) => url !== input));
  };

  return (
    <div className="upload__image-container">
      <div className="row">
        <div className="col-6 pr-0">
          {/* Upload images */}
          <div className="upload__images-main-image">
            <div className="upload__images-main-image-group">
              <p>Drop files anywhere to Upload</p>
              <div className="icon-group" onClick={handlePickerFile}>
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
            {previewUrls.length > 0 &&
              previewUrls.map((url, index) => (
                <li key={index} className="display__list-images-item">
                  <div className="display__list-images-item__info d-flex">
                    <Image src={URL.createObjectURL(url)} alt="Images" />
                    <span>{url.name}</span>
                  </div>

                  <FontAwesomeIcon
                    icon={faClose}
                    className="icon circle"
                    onClick={() => handleRemoveImage(url)}
                  />
                </li>
              ))}

            {/* This input to receive data images */}
            <input
              {...register("imagesProduct", {
                required: true,
              })}
              type="hidden"
              value={previewUrls}
            />
            {/* This input to receive data images */}
          </ul>
          {/* Sub images */}
        </div>
      </div>
    </div>
  );
};

export { UploadMultipleImages, UploadImage };
