import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const useUploadPhoto = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);

  const { currentUser } = useAuthContext();

  const allowedFileTypes = ["image/jpeg", "image/png"];

  const uploadPhoto = (image: File, isProfilePhoto: boolean) => {
    setLoading(true);

    if (!currentUser) {
      setError("No current user");
      setLoading(false);
      return;
    }

    if (!image) {
      setError("Not an image");
      setLoading(false);
      return;
    }

    if (!allowedFileTypes.includes(image.type)) {
      setError("Not a valid file type (jpeg and png only)");
      setLoading(false);
      return;
    }

    const uuid = uuidv4();
    const fileExt = image.name.substring(image.name.lastIndexOf(".") + 1);
    const fileRef = ref(storage, `/photos/${currentUser.uid}/${uuid}.${fileExt}`);

    const uploadTask = uploadBytesResumable(fileRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
      },
      (err) => {
        setError(err.message);
        setProgress(null);
        setLoading(false);
      },
      async () => {
        const url = getDownloadURL(fileRef);

        await addDoc(collection(db, "users", currentUser.uid, "photos"), {
          name: image.name,
          type: image.type,
          size: image.size,
          timestamp: serverTimestamp(),
          path: fileRef.fullPath,
          url,
          isProfilePhoto: isProfilePhoto,
        });

        setLoading(false);
        setProgress(null);
        setError(null);
      }
    );
  };

  return {
    error,
    loading,
    progress,
    uploadPhoto,
  };
};

export default useUploadPhoto;
