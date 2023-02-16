import { ThemeUIStyleObject } from "theme-ui";

export const CharacterInfoList: ThemeUIStyleObject = {
    listStyleType: "none",
    textAlign: "right",
    fontSize: "1.25rem",
    fontFamily: "paragraph",
    color: "secondaryText",
    fontWeight: "bold",
}

export const CharacterImageStyles: ThemeUIStyleObject = {
    width: "50%",
    borderRadius: "0.25rem",
    border: "3px solid #fff3c255",
}

export const CharacterGridStyles: ThemeUIStyleObject = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.5rem",
}

export const CharacterDescriptionWrapperStyles: ThemeUIStyleObject = {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "1.75rem"
}

export const CharacterTitlesStyles: ThemeUIStyleObject = {
    color: "secondaryText",
    fontSize: ["secondaryHeadingMobile", "secondaryHeadingMobile", "secondaryHeading"],
    fontFamily: "heading"
}