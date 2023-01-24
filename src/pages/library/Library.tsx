/** @jsxImportSource theme-ui */

import { LoggedInPageWrapperStyles } from "../../Global.styles";
import { BookGridStyles, BookTitleStyles, LibraryHeadingStyles, BookStyles } from "./Library.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { SidebarVisibilityProps } from "../../components/sidebar/Sidebar";
import libraryBooks from "../../assets/data/libraryBooks.json";

const Library = ({ isSidebarVisible }: SidebarVisibilityProps) => {
    const navigate = useNavigate();

    return (
        <div sx={isSidebarVisible ? {
            ...LoggedInPageWrapperStyles, flexDirection: "column", alignItems: "center"
        } : {
            ...LoggedInPageWrapperStyles, flexDirection: "column", alignItems: "center", top: ["8vh", "10vh", "10vh"]
        }}>
            <div sx={LibraryHeadingStyles}>Library</div>
            <div sx={BookGridStyles}>
                {libraryBooks.map(book => (
                    <div key={book.id} sx={BookStyles} onClick={() => navigate(`/library/book/${book.id}`)}>
                        <FontAwesomeIcon icon={faBook} size="5x" />
                        <div sx={BookTitleStyles}>{book.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Library;