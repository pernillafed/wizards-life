import { ThemeUIStyleObject } from "theme-ui";

export const FormHeadingStyles: ThemeUIStyleObject = {
    fontFamily: "heading",
    fontSize: ["2rem", "2.5rem", "primaryHeading"],
    color: "primaryText",
    textAlign: "center"
}

export const FormWrapperStyles: ThemeUIStyleObject = {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
    marginBottom: "2rem"
}

export const FormInputFieldStyles: ThemeUIStyleObject = {
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

export const FormButtonStyles: ThemeUIStyleObject = {
    backgroundColor: "primaryBackground",
    border: "none",
    borderRadius: "0.5rem",
    padding: "0.75rem 1rem",
    margin: "1rem auto 0 auto",
    width: "40%",
    color: "primaryText",
    textTransform: "uppercase",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
    outline: "none",
    transition: "background-color 0.4s",
    ':hover': {
        backgroundColor: "#6c5847",
      },
}