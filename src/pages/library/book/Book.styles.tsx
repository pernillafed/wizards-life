import { ThemeUIStyleObject } from "theme-ui";

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

export const BookContentGridStyles: ThemeUIStyleObject = {
    width: ["100%", "100%", "80%"],
    minWidth: ["200px", "200px", "515px"],
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr", "repeat(2, 1fr)"],
    gap: "1rem",
    textAlign: "center",
}

export const BookContentLinkStyles: ThemeUIStyleObject = {
    textDecoration: "none",
    color: "secondaryText",
    fontSize: "1.25rem",
    fontFamily: "paragraph",
    ":hover": {
        textDecoration: "underline dotted #1a130d 1px"
    }
}

export const BookPageStyles: ThemeUIStyleObject = {
    width: "100%",
    maxWidth: "900px",
    margin: ["1.5rem auto", "2rem auto", "2rem auto"],
    backgroundColor: "contentBackground",
    borderRadius: "0.25rem",
    boxShadow: "0.25rem 0.25rem 0.75rem black",
    padding: "3rem 1.5rem 4rem 1.5rem"
}