/** @jsxImportSource theme-ui */

import { LoggedInPageWrapperStyles } from "../../Global.styles";
import { BookGridStyles, BookTitleStyles, LibraryHeadingStyles, BookStyles } from "./Library.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Library = () => {
    const navigate = useNavigate();

    return (
        <div sx={{ ...LoggedInPageWrapperStyles, flexDirection: "column", alignItems: "center" }}>
            <div sx={LibraryHeadingStyles}>Library</div>
            <div sx={BookGridStyles}>
                <div sx={BookStyles} onClick={() => navigate("/library/book/historical-wizards")}>
                    <FontAwesomeIcon icon={faBook} size="4x" />
                    <div sx={BookTitleStyles}>Historical Wizards</div>
                </div>
                <div sx={BookStyles} onClick={() => navigate("/library/book/hogwarts-houses")}>
                    <FontAwesomeIcon icon={faBook} size="4x" />
                    <div sx={BookTitleStyles}>Hogwarts Houses</div>
                </div>
                <div sx={BookStyles} onClick={() => navigate("/library/book/creatures-of-the-wizarding-world")}>
                    <FontAwesomeIcon icon={faBook} size="4x" />
                    <div sx={BookTitleStyles}>Creatures of the Wizarding World</div>
                </div>
                <div sx={BookStyles} onClick={() => navigate("/library/book/famous-wands-through-time")}>
                    <FontAwesomeIcon icon={faBook} size="4x" />
                    <div sx={BookTitleStyles}>Famous Wands through Time</div>
                </div>
            </div>
        </div>
    );
}
 
export default Library;