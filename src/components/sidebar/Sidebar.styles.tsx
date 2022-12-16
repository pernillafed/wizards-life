import { ThemeUIStyleObject } from "theme-ui";

export const SidebarWrapperStyles: ThemeUIStyleObject = {
    display: "flex",
    flexDirection: "column",
    margin: "3rem 2rem"
}

export const SidebarLinkStyles: ThemeUIStyleObject = {
    backgroundColor: "primaryBackground",
    padding: "1rem 2rem",
    textDecoration: "none",
    color: "primaryText",
    fontSize: "1rem",
    marginBottom: "1rem",
    cursor: "pointer",
    textAlign: "center",
    boxShadow: "0.25rem 0.25rem 0.5rem #00000077",
    textTransform: "uppercase",
    fontFamily: "paragraph",
    transition: "primaryBackground",
    ":hover": {
        backgroundColor: "hoverPrimaryBackground"
    }
}