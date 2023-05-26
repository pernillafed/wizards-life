import { ThemeUIStyleObject } from "theme-ui";

export const HomePageWrapperStyles: ThemeUIStyleObject = {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: ["690px", "10vh", "10vh"],
    left: ["0", "205px", "205px"],
    right: "0",
    padding: "2rem"
}

export const GridStyles: ThemeUIStyleObject = {
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(10, 1fr)",
    gap: "1rem"
}

export const NewsHeadingStyles: ThemeUIStyleObject = {
    fontFamily: "newspaper",
    backgroundColor: "contentBackground",
    padding: "1rem 1.5rem",
    borderRadius: "0.25rem",
    textAlign: "center",
    boxShadow: "0.25rem 0.25rem 0.75rem black"
}

export const FirstHeadingStyles: ThemeUIStyleObject = {
    fontSize: ["3rem", "4.5rem", "4.5rem"],
    gridColumnStart: "1",
    gridColumnEnd: "11"
}

export const SecondHeadingStyles: ThemeUIStyleObject = {
    fontSize: "2rem",
    gridColumnStart: "1",
    gridColumnEnd: ["11", "11", "7"]
}

export const ThirdHeadingStyles: ThemeUIStyleObject = {
    fontSize: ["2.5rem", "2.5rem", "2.75rem"],
    gridColumnStart: ["1", "1", "7"],
    gridColumnEnd: "11",
    gridRowStart: ["3", "3", "2"],
    gridRowEnd: "4",
    hyphens: ["none", "none", "manual"],
}

export const FourthHeadingStyles: ThemeUIStyleObject = {
    fontSize: "2.5rem",
    gridColumnStart: "1",
    gridColumnEnd: ["11", "11", "7"],
}

export const FifthHeadingStyles: ThemeUIStyleObject = {
    fontSize: "2rem",
    gridColumnStart: "1",
    gridColumnEnd: ["11", "11", "6"],
}

export const SixthHeadingStyles: ThemeUIStyleObject = {
    fontSize: "2rem",
    gridColumnStart: ["1", "1", "6"],
    gridColumnEnd: "11",
}