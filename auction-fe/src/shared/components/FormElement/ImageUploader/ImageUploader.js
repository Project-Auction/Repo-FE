import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faCloudArrowUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import "./UploadImage.css";
import Image from "../../UIElement/Image";
import { Controller, useFormContext } from "react-hook-form";
import { validateForm } from "../../../../utils/Validator";

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

const UploadMultipleImages = ({ fieldName, className, validators = [] }) => {
  const { control } = useFormContext();

  const storedImagesMap = new Map();

  return (
    <Controller
      name={fieldName}
      control={control}
      rules={{
        validate: {
          validate: (value) => {
            if (validators.length > 0) {
              return validateForm(value, validators);
            }
          },
        },
      }}
      render={({ field: { onChange, value = [] } }) => {
        const onChangePicker = (e) => {
          const input = Array.from(e.target.files);
          input.forEach((url) => {
            if (!storedImagesMap.has(url.name)) {
              storedImagesMap.set(url.name, url);
            }
          });
          const values = Array.from(storedImagesMap.values());
          onChange(values);
        };

        const handleRemoveImage = (file) => {
          const updatedImages = value.filter((f) => f !== file);
          storedImagesMap.delete(file.name);
          onChange(updatedImages);
        };

        return (
          <div className={`upload__image-container ${className}`}>
            <div className="row">
              <div className="col-6 pr-0">
                {/* Upload images */}
                <div className="upload__images-main-image">
                  <div className="upload__images-main-image-group">
                    <p>Drop files anywhere to Upload</p>
                    <label htmlFor="file-input">
                      <input
                        type={value.length === 5 ? "hidden" : "file"}
                        id="file-input"
                        style={{ display: "none" }}
                        onChange={onChangePicker}
                        multiple
                        accept=".jpg,.png,.jpeg"
                      />
                      <div className="icon-group">
                        <FontAwesomeIcon
                          icon={faCloudArrowUp}
                          className="icon"
                        />
                      </div>
                    </label>

                    {value.length !== 5 && (
                      <>
                        <p>Select File Here</p>
                        <p>At least 5 images for product</p>
                      </>
                    )}
                    <p>
                      {value.length === 5
                        ? "You selected enough"
                        : `You selected ${value.length} images`}
                    </p>
                  </div>
                </div>
                {/* Upload images */}
              </div>
              <div className="col-6 pr-0">
                {/* Sub images */}
                <ul className="display__list-images-list">
                  {value.length > 0 &&
                    value.map((url, index) => {
                      const objectUrl = URL.createObjectURL(url);
                      return (
                        <li key={index} className="display__list-images-item">
                          <div className="display__list-images-item__info d-flex">
                            <img src={objectUrl} alt="Images" />
                            <span>{url.name}</span>
                          </div>

                          <FontAwesomeIcon
                            icon={faClose}
                            className="icon circle"
                            onClick={() => handleRemoveImage(url)}
                          />
                        </li>
                      );
                    })}
                </ul>
                {/* Sub images */}
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export { UploadMultipleImages, UploadImage };
