import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./UploadImage.css";
import Image from "../../UIElement/Image";

const UploadImage = (props) => {
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

      <div onClick={handlePickImage} className="upload__image-display">
        <Image src={previewUrl || null} alt="Avatar" className="image" circle />
        <FontAwesomeIcon icon={faPlus} className="icon circle" />
      </div>
    </div>
  );
};

export default UploadImage;
