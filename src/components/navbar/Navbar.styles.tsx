import { ThemeUIStyleObject } from "theme-ui";


export const NavbarWrapperStyles: ThemeUIStyleObject = {
    backgroundColor: "primaryBackground",
    color: "primaryText",
    height: ["8vh", "10vh", "10vh"],
    minHeight: "4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingX: "1rem",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "1",
}

export const NavbarTitleStyles: ThemeUIStyleObject = {
    fontSize: ["primaryHeadingMobile", "primaryHeading", "primaryHeading"],
    fontFamily: "heading",
    paddingTop: "0.25rem",
    cursor: "pointer"
}