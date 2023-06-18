import { ThemeUIStyleObject } from "theme-ui";
import HogwartsCastle from "../../../assets/hogwarts-castle.jpg";

export const LoginOrCreateWrapperStyles: ThemeUIStyleObject = {
  background: `url(${HogwartsCastle}) no-repeat center top fixed`,
  backgroundSize: "cover",
  height: "100%",
  minHeight: ["92vh", "90vh", "90vh"],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: ["8vh", "10vh", "10vh"],
};

export const LoginOrCreateFormStyles: ThemeUIStyleObject = {
  backgroundColor: "secondaryBackground",
  padding: "2rem 3rem",
  borderRadius: "2rem",
  boxShadow: "0.5rem 0.5rem 3rem black",
  marginTop: "2rem",
  marginBottom: "3rem",
  width: ["22rem", "24rem", "26rem"],
};

export const SwitchFormsLinkStyles: ThemeUIStyleObject = {
  fontWeight: "bold",
  cursor: "pointer",
  marginLeft: "0.25rem",
  fontFamily: "paragraph",
  ":hover": { textDecoration: "underline" },
};
