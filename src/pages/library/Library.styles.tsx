import { ThemeUIStyleObject } from "theme-ui";

export const LibraryGridStyles: ThemeUIStyleObject = {
  width: "100%",
  maxWidth: "450px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  color: "primaryText",
};

export const BookTitleStyles: ThemeUIStyleObject = {
  fontFamily: "heading",
  fontSize: "1.5rem",
  marginLeft: "1.5rem",
};

export const BookStyles: ThemeUIStyleObject = {
  display: "flex",
  alignItems: "center",
  marginBottom: ["1.5rem", "2.5rem", "2.5rem"],
  ":hover": {
    cursor: "pointer",
    textDecoration: "underline dotted #fff3c2 1px",
  },
};
