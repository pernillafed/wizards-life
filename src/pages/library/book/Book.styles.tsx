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
    gridTemplateColumns: ["1fr", "1fr 3fr 1fr", "1fr 3fr 1fr"],
    columnGap: "0.5rem"
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
    },
}

export const CharacterGridStyles: ThemeUIStyleObject = {
    width: "100%",
    maxWidth: "900px",
    margin: ["1.5rem auto 0 auto", "2rem auto", "2rem auto"],
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1rem",
    textAlign: "center"
}

export const CharacterLinkStyles: ThemeUIStyleObject = {
    textDecoration: "none",
    color: "primaryText",
    fontSize: "1.25rem",
    fontFamily: "paragraph",
    border: "1px solid #fff3c2",
    borderRadius: "1rem",
    padding: "1rem 1.5rem",
}