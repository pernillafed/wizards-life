import { ThemeUIStyleObject } from "theme-ui";

export const LoginHeadingStyles: ThemeUIStyleObject = {
    fontFamily: "heading",
    fontSize: "primaryHeading",
    color: "primaryText",
    textAlign: "center"
}

export const LoginFormStyles: ThemeUIStyleObject = {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
    marginBottom: "2rem"
}

export const InputFieldStyles: ThemeUIStyleObject = {
    backgroundColor: "primaryBackground",
    marginBottom: "0.5rem",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    border: "none",
    outline: "none",
    color: "primaryText",
    fontSize: "1rem"
}

export const ButtonStyles: ThemeUIStyleObject = {
    backgroundColor: "primaryBackground",
    border: "none",
    borderRadius: "0.5rem",
    padding: "0.5rem 1rem",
    margin: "1rem auto 0 auto",
    width: "60%",
    color: "primaryText",
    textTransform: "uppercase",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.4s",
    ':hover': {
        backgroundColor: "#6c5847",
      },
}