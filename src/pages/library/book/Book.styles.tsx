import { ThemeUIStyleObject } from "theme-ui";

export const BookTitleStyles: ThemeUIStyleObject = {
    color: "primaryText",
    fontFamily: "heading",
    fontSize: "primaryHeading",
    textAlign: "center"
}

export const TitleWrapperStyles: ThemeUIStyleObject = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr"
}

export const BackLinkStyles: ThemeUIStyleObject = {
    textDecoration: "none",
    color: "primaryText",
    fontFamily: "paragraph",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "color 0.2s",
    ":hover": {
        color: "hoverPrimaryText"
    }
}