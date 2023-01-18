import { ThemeUIStyleObject } from "theme-ui";

export const ButtonStyles: ThemeUIStyleObject = {
    border: "none",
    borderRadius: "0.5rem",
    padding: "0.80rem 1rem 0.70rem 1rem",
    color: "primaryText",
    textTransform: "uppercase",
    fontWeight: "bold",
    cursor: "pointer",
    outline: "none",
    transition: "primaryBackground"
}

export const LoggedInPageWrapperStyles: ThemeUIStyleObject = {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: ["650px", "10vh", "10vh"],
    left: ["0", "205px", "205px"],
    right: "0",
    padding: "2rem"
}