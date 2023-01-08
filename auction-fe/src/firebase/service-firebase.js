import { useCallback } from "react";
import { useState } from "react";

import { toast } from "react-toastify";
import {
  getDownloadURL,
  getMetadata,
  listAll,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
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

/* Used to get files from cloud storage */
export const useStorageListFiles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [urls, setUrls] = useState([]);

  const handleFetchFiles = useCallback(async ({ nameProduct }) => {
    const fileName = `imagesProduct/${nameProduct}`;

    const listRef = ref(storage, fileName);

    try {
      const res = await listAll(listRef);
      setIsLoading(false);
      // Transform the 'res.items' array into an array of objects with 'url' and 'name' properties
      const urls = await Promise.all(
        res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          const metadata = await getMetadata(ref(storage, url));
          return { url: url, name: metadata.name };
        })
      );

      setUrls(urls);
    } catch (error) {
      setIsLoading(false);
      toast("Error: " + error, { type: "error" });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearUrls = useCallback(() => {
    setUrls([]);
  }, []);

  return { handleFetchFiles, urls, clearUrls, isLoading };
};
