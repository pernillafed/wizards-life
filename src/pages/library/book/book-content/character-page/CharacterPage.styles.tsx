import { ThemeUIStyleObject } from "theme-ui";

export const CharacterInfoList: ThemeUIStyleObject = {
  listStyleType: "none",
  fontSize: "1.25rem",
  fontFamily: "paragraph",
  color: "secondaryText",
};

export const CharacterImageStyles: ThemeUIStyleObject = {
  width: "100%",
  borderRadius: "0.25rem",
  border: "3px solid #fff3c255",
};

export const CharacterGridStyles: ThemeUIStyleObject = {
  padding: ["0.5rem 0.25rem", "0.5 0.25rem", "0.5rem 5rem"],
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr", "repeat(2, 1fr)"],
  gap: "1rem",
};

export const CharacterDescriptionWrapperStyles: ThemeUIStyleObject = {
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr", "repeat(2, 1fr)"],
  gap: ["2rem", "2rem", "1rem"],
  margin: "1.5rem 2rem 0 2rem",
};
