import { ThemeUIStyleObject } from "theme-ui";
import HogwartsCastle from "../../assets/hogwarts-castle.jpg";

export const HomeWrapperStyles: ThemeUIStyleObject = {
    background: `url(${HogwartsCastle}) no-repeat center top fixed`,
    backgroundSize: "cover",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

export const LoginOrCreateContainerStyles: ThemeUIStyleObject = {
    backgroundColor: "secondaryBackground",
    padding: "2rem 3rem",
    borderRadius: "2rem",
    boxShadow: "0.5rem 0.5rem 3rem black",
}