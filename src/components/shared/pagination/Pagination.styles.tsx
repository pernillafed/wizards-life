import { ThemeUIStyleObject } from "theme-ui";

export const PageNumberStyles: ThemeUIStyleObject = {
    margin: "0 1.5rem",
    color: "primaryText",
    fontSize: "2rem",
    fontFamily: "paragraph"
}

export const PageButtonStyles: ThemeUIStyleObject = {
    backgroundColor: "primaryBackground",
    transition: "primaryBackground",
    ":hover": {
        backgroundColor: "hoverPrimaryBackground"
    },
    ":disabled": {
        cursor: "default",
        backgroundColor: "#584738"
    }
}