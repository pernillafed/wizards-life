import { ThemeUIStyleObject } from "theme-ui";

export const SidebarWrapperStyles: ThemeUIStyleObject = {
  display: "flex",
  flexDirection: "column",
  width: ["100%", "180px", "180px"],
  position: ["absolute", "fixed", "fixed"],
  top: ["8vh", "10vh", "10vh"],
  left: ["0", "1.5rem", "1.5rem"],
  paddingY: "2rem",
  paddingX: ["3rem", "0", "0"],
};

export const SidebarLinkStyles: ThemeUIStyleObject = {
  backgroundColor: "primaryBackground",
  padding: "1rem 2rem",
  textDecoration: "none",
  color: "primaryText",
  fontSize: "1rem",
  marginBottom: "0.90rem",
  cursor: "pointer",
  textAlign: "center",
  boxShadow: "0.25rem 0.25rem 0.5rem #00000077",
  textTransform: "uppercase",
  fontFamily: "paragraph",
  transition: "primaryBackground",
  borderRadius: "0.5rem",
  ":hover": {
    backgroundColor: "hoverPrimaryBackground",
  },
};
