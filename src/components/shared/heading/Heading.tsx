/** @jsxImportSource theme-ui */

import { PrimaryHeadingStyles, SecondaryHeadingStyles } from "./Heading.styles";

export type HeadingProps = {
  text: string;
  type: "h1" | "h2";
  color: "primaryText" | "secondaryText";
  isBookPageTitle?: boolean;
  hasSubHeading?: boolean;
};

const Heading = ({ text, type, color, isBookPageTitle, hasSubHeading }: HeadingProps) => {
  return type === "h1" ? (
    <h1
      sx={{
        ...PrimaryHeadingStyles,
        color,
        marginTop: isBookPageTitle ? "0" : ["1rem", "0", "0"],
        marginBottom:
          isBookPageTitle && !hasSubHeading
            ? "1.75rem"
            : isBookPageTitle && hasSubHeading
            ? "0.5rem"
            : ["2rem", "3rem", "3rem"],
      }}
    >
      {text}
    </h1>
  ) : (
    <h2
      sx={{
        ...SecondaryHeadingStyles,
        color,
        marginBottom: isBookPageTitle ? "1.75rem" : "0.25rem",
      }}
    >
      {text}
    </h2>
  );
};

export default Heading;
