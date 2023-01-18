import { ThemeUIStyleObject } from "theme-ui";

export const BookGridStyles: ThemeUIStyleObject = {
    width: "100%",
    maxWidth: "900px",
    margin: "3rem auto 0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2rem",
    color: "primaryText",
    textAlign: "center"
}

export const LibraryHeadingStyles: ThemeUIStyleObject = {
    color: "primaryText",
    fontFamily: "heading",
    fontSize: "primaryHeading"
}

export const BookTitleStyles: ThemeUIStyleObject = {
    fontFamily: "heading",
    fontSize: "1.5rem",
    marginTop: "1rem"
}

export const BookStyles: ThemeUIStyleObject = {
    height: "fit-content",
    borderRadius: "2rem",
    padding: "1.25rem 1rem 1rem 1rem",
    transition: "box-shadow 0.2s",
    ":hover": {
        cursor: "pointer",
        boxShadow: "0 0 1rem #00000099"
    }
}