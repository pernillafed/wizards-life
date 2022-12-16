import { ThemeUIStyleObject } from "theme-ui";

export const AuthFormHeadingStyles: ThemeUIStyleObject = {
    fontFamily: "heading",
    fontSize: ["2rem", "2.5rem", "primaryHeading"],
    color: "primaryText",
    textAlign: "center"
}

export const AuthFormWrapperStyles: ThemeUIStyleObject = {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
    marginBottom: "2rem"
}

export const AuthFormInputFieldStyles: ThemeUIStyleObject = {
    backgroundColor: "primaryBackground",
    marginBottom: "0.5rem",
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    border: "none",
    outline: "none",
    color: "primaryText",
    fontSize: "1rem",
    "::placeholder": {
        color: "primaryText",
        opacity: "0.25"
    }
}

export const AuthFormButtonStyles: ThemeUIStyleObject = {
    backgroundColor: "primaryBackground",
    border: "none",
    borderRadius: "0.5rem",
    padding: "0.80rem 1rem 0.70rem 1rem",
    margin: "1rem auto 0 auto",
    width: "40%",
    color: "primaryText",
    textTransform: "uppercase",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
    outline: "none",
    transition: "primaryBackground",
    ':hover': {
        backgroundColor: "hoverPrimaryBackground",
    },
}