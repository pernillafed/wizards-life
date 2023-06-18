import { ThemeUIStyleObject } from "theme-ui";

export const CreatureContent: ThemeUIStyleObject = {
  padding: "1rem 5rem",
};

export const CreatureFacts: ThemeUIStyleObject = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1rem",
};

export const CreatureImage: ThemeUIStyleObject = {
  width: "100%",
  borderRadius: "0.25rem",
  border: "3px solid #fff3c255",
};

export const CreatureFactsList: ThemeUIStyleObject = {
  listStyleType: "none",
  fontSize: "1.25rem",
  fontFamily: "paragraph",
  color: "secondaryText",
};

export const CreatureDistinctionsList: ThemeUIStyleObject = {
  listStyleType: "none",
  textAlign: "center",
  fontSize: "1.25rem",
  fontFamily: "paragraph",
  color: "secondaryText",
};

export const CreatureSubSpeciesContent: ThemeUIStyleObject = {
  display: "flex",
  justifyContent: "center",
};
