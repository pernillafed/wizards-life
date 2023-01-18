/** @jsxImportSource theme-ui */

import { useParams } from "react-router-dom";
import { LoggedInPageWrapperStyles } from "../../../Global.styles";

const Book = () => {
    const { bookTitle } = useParams();

    const capitalizeFirstLetter = () => {
        if (bookTitle) {
            let titleWithSpaces = bookTitle.replaceAll("-", " ");
            return titleWithSpaces?.charAt(0).toUpperCase() + titleWithSpaces?.slice(1);
        } else {
            return "Book title unknown"
        }
    }

    return (
        <div sx={LoggedInPageWrapperStyles}>
            <div sx={{ color: "primaryText", fontFamily: "heading", fontSize: "primaryHeading" }}>{capitalizeFirstLetter()}</div>
        </div>
    );
}
 
export default Book;