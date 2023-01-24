import { ThemeUIStyleObject } from "theme-ui";

export const BookGridStyles: ThemeUIStyleObject = {
    width: "100%",
    maxWidth: "900px",
    margin: ["1.5rem auto 0 auto", "3rem auto 0 auto", "3rem auto 0 auto"],
    display: "grid",
    gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"],
    gap: "1rem",
    color: "primaryText",
    textAlign: "center"
}

export const LibraryHeadingStyles: ThemeUIStyleObject = {
    color: "primaryText",
    fontFamily: "heading",
    fontSize: "primaryHeading",
    marginTop: ["1rem", "0", "0"]
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