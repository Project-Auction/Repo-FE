import { useCallback } from "react";
import { useState } from "react";

import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../config/firebaseConfig";

export const useStorageFile = () => {
  /* Get user information */
  const [progress, setProgress] = useState(0);

  const [urls, setUrls] = useState([]);

  const handleStorageFiles = useCallback((fileUpload, fileNamePath) => {
    const fileName = `imagesProduct/${fileNamePath}/${fileUpload.name}`;

    const storageRef = ref(storage, fileName);

    /* Save image to database firebase */
    const uploadImage = uploadBytesResumable(storageRef, fileUpload);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
        toast("Error adding images", { type: "error" });
      },
      (success) => {
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          /* There are using for convert become url and save on database */
          /* Firebase database It depends on your specific needs and requirements. If you want to store information about the images in a structured way, such as the image URL, file name, size, or other metadata, then using a database like Firestore to store this information could be a good option. This would allow you to query the database to retrieve information about the images, as well as update or delete this information as needed. */
          setUrls((prevUrl) => [...prevUrl, url]);
        });
      }
    );
    return fileName;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Used for clear urls */
  const clearImages = () => {
    setUrls([]);
  };

  return { urls, progress, handleStorageFiles, clearImages };
};
