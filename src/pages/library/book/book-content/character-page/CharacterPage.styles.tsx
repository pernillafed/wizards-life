import { ThemeUIStyleObject } from "theme-ui";

export const CharacterInfoList: ThemeUIStyleObject = {
    listStyleType: "none",
    textAlign: "right",
    fontSize: "1.25rem",
    fontFamily: "paragraph",
    color: "secondaryText",
}

export const CharacterImageStyles: ThemeUIStyleObject = {
    width: "60%",
    borderRadius: "0.25rem",
    border: "3px solid #fff3c255",
}

export const CharacterGridStyles: ThemeUIStyleObject = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.5rem",
}

export const CharacterDescriptionWrapperStyles: ThemeUIStyleObject = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    margin: "1.75rem 2rem 0 2rem"
}