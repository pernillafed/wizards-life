/** @jsxImportSource theme-ui */

import { useState } from "react";
import Heading from "../../components/shared/heading/Heading";
import LoggedInPageWrapper from "../../components/shared/logged-in-page-wrapper/LoggedInPageWrapper";
import { SidebarVisibilityProps } from "../../components/sidebar/Sidebar";
import { useAuthContext } from "../../contexts/AuthContext";

const Profile = ({ isSidebarVisible }: SidebarVisibilityProps) => {
  const { currentUser, updateUserInfo } = useAuthContext();

  const [userName, setUserName] = useState<string>();
  const [userImage, setUserImage] = useState<string>();

  const handleUpdate = () => {
    updateUserInfo(userName, userImage);
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
          {currentUser.photoURL && <img src={currentUser.photoURL} alt={currentUser.photoURL} />}
        </>
      )}
      <div sx={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          placeholder="displayName"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="file"
          placeholder="photoURL"
          // TODO: Fix photo upload (fix storage first, then use that photo for this)
          onChange={(e) => console.log(e.target.files?.[0])}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </LoggedInPageWrapper>
  );
};

export default Profile;
