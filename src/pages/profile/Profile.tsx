/** @jsxImportSource theme-ui */

import { useState } from "react";
import Heading from "../../components/shared/heading/Heading";
import LoggedInPageWrapper from "../../components/shared/logged-in-page-wrapper/LoggedInPageWrapper";
import { SidebarVisibilityProps } from "../../components/sidebar/Sidebar";
import { useAuthContext } from "../../contexts/AuthContext";
import { ButtonStyles } from "../../Global.styles";
import useUploadPhoto from "../../hooks/useUploadPhoto";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";

const Profile = ({ isSidebarVisible }: SidebarVisibilityProps) => {
  const { currentUser, updateUserInfo } = useAuthContext();

  const [userName, setUserName] = useState<string>();
  const [userImage, setUserImage] = useState<File>();
  const [fileUploadMessage, setFileUploadMessage] = useState<string>();

  const { error, loading, progress, uploadPhoto } = useUploadPhoto();

  const photosQueryRef = query(
    collection(db, "users", currentUser!.uid, "photos"),
    orderBy("timestamp", "desc")
  );

  const { data: photos, isLoading: isLoadingPhotos } = useFirestoreQueryData(
    ["photos"],
    photosQueryRef,
    {
      subscribe: true,
      idField: "photoId",
    },
    {
      refetchOnMount: "always",
    }
  );

  const handlePhotoUpload = () => {
    if (!userImage) {
      setFileUploadMessage("Choose a file to upload");
      return;
    }

    uploadPhoto(userImage, true);
  };

  const handleUpdate = async () => {
    const profilePhoto = photos?.find((photo) => photo.isProfilePhoto);
    await updateUserInfo(userName, profilePhoto ? profilePhoto.url : null);
    // TODO: Look into how the profile info will update on the page without reload
    window.location.reload();
  };

  return (
    <LoggedInPageWrapper isSidebarVisible={isSidebarVisible}>
      {currentUser && (
        <>
          <Heading
            text={
              currentUser.displayName
                ? currentUser.displayName
                : currentUser.email
                ? currentUser.email
                : "New user"
            }
            type="h1"
            color="primaryText"
          />
          {currentUser.photoURL && (
            <img
              src={currentUser.photoURL}
              alt={currentUser.photoURL}
              sx={{ width: "20%", marginBottom: "2rem" }}
            />
          )}
        </>
      )}
      <div sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input type="text" placeholder="username" onChange={(e) => setUserName(e.target.value)} />
        <div>
          <div>
            <input
              type="file"
              onChange={(e) => {
                setFileUploadMessage(undefined);
                setUserImage(e.target.files?.[0]);
              }}
            />
            <button
              onClick={handlePhotoUpload}
              disabled={loading}
              sx={{
                ...ButtonStyles,
                backgroundColor: "primaryBackground",
                ":disabled": { filter: "brightness(120%)", cursor: "not-allowed" },
              }}
            >
              Upload
            </button>
          </div>
          {error && <div>{error}</div>}
          {progress && <div>{progress} %</div>}
          {fileUploadMessage && <div>{fileUploadMessage}</div>}
        </div>
        <button
          onClick={handleUpdate}
          disabled={isLoadingPhotos}
          sx={{
            ...ButtonStyles,
            backgroundColor: "primaryBackground",
            ":hover": { backgroundColor: "hoverPrimaryBackground" },
            ":disabled": { filter: "brightness(120%)", cursor: "not-allowed" },
          }}
        >
          Update
        </button>
      </div>
    </LoggedInPageWrapper>
  );
};

export default Profile;
