/** @jsxImportSource theme-ui */

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { ButtonStyles } from "../../Global.styles";
import { SidebarVisibilityProps } from "../sidebar/Sidebar";
import { NavbarTitleStyles, NavbarWrapperStyles } from "./Navbar.styles";

export type NavbarProps = SidebarVisibilityProps & {
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isSidebarVisible, setIsSidebarVisible }: NavbarProps) => {
  const { currentUser, logout } = useAuthContext();

  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate("/");
  };

  return (
    <div sx={NavbarWrapperStyles}>
      <div sx={NavbarTitleStyles} onClick={() => navigate("/")}>
        Wizards Life
      </div>
      {currentUser && (
        <>
          <button
            sx={{
              ...ButtonStyles,
              display: ["none", "inline", "inline"],
              backgroundColor: "secondaryBackground",
              ":hover": {
                backgroundColor: "#4f3f32",
              },
            }}
            onClick={handleLogOut}
          >
            Log out
          </button>
          <button
            sx={{
              ...ButtonStyles,
              display: ["inline", "none", "none"],
              backgroundColor: isSidebarVisible ? "#3f3124" : "secondaryBackground",
            }}
            onClick={() => setIsSidebarVisible?.(!isSidebarVisible)}
          >
            <FontAwesomeIcon icon={faBars} size="xl" />
          </button>
        </>
      )}
    </div>
  );
};

export default Navbar;
