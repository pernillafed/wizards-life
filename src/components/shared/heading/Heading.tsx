/** @jsxImportSource theme-ui */

import { HeadingStyles } from "./Heading.styles";

export type HeadingProps = {
    text: string;
    type: "h1" | "h2" | "h3";
}

const Heading = ({ text, type }: HeadingProps) => {
    return (
        type === "h1" ? <h1 sx={HeadingStyles}>{text}</h1> :
        type === "h2" ? <h2 sx={HeadingStyles}>{text}</h2> :
        <h3 sx={HeadingStyles}>{text}</h3>
    );
}
 
export default Heading;