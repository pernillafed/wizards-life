import { ThemeUIStyleObject } from "theme-ui";

export const HomeWrapperStyles: ThemeUIStyleObject = {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: "10vh",
    left: "212px",
    right: "0",
    paddingX: "3rem"
}

export const GridStyles: ThemeUIStyleObject = {
    width: "100%",
    maxWidth: "900px",
    margin: "3rem auto",
    display: "grid",
    gridTemplateColumns: "repeat(10, 1fr)",
    gap: "1rem"
}

export const NewsHeadingStyles: ThemeUIStyleObject = {
    fontFamily: "newspaper",
    backgroundColor: "#fff3c299",
    padding: "1rem 1.5rem",
    borderRadius: "0.25rem",
    textAlign: "center"
}

export const FirstHeadingStyles: ThemeUIStyleObject = {
    fontSize: "4.5rem",
    gridColumnStart: "1",
    gridColumnEnd: "11"
}

export const SecondHeadingStyles: ThemeUIStyleObject = {
    fontSize: "2rem",
    gridColumnStart: "1",
    gridColumnEnd: "7"
}

export const ThirdHeadingStyles: ThemeUIStyleObject = {
    fontSize: "3rem",
    gridColumnStart: "7",
    gridColumnEnd: "11",
    gridRowStart: "2",
    gridRowEnd: "4"
}

export const FourthHeadingStyles: ThemeUIStyleObject = {
    fontSize: "2.5rem",
    gridColumnStart: "1",
    gridColumnEnd: "7",
}

export const FifthHeadingStyles: ThemeUIStyleObject = {
    fontSize: "2rem",
    gridColumnStart: "1",
    gridColumnEnd: "6",
}

export const SixthHeadingStyles: ThemeUIStyleObject = {
    fontSize: "2rem",
    gridColumnStart: "6",
    gridColumnEnd: "11",
}