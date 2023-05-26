/** @jsxImportSource theme-ui */

import { BookGridStyles, BookTitleStyles, LibraryHeadingStyles, BookStyles } from "./Library.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { SidebarVisibilityProps } from "../../components/sidebar/Sidebar";
import libraryBooks from "../../assets/data/libraryBooks.json";
import LoggedInPageWrapper from "../../components/shared/logged-in-page-wrapper/LoggedInPageWrapper";

const Library = ({ isSidebarVisible }: SidebarVisibilityProps) => {
    const navigate = useNavigate();

    return (
        <LoggedInPageWrapper isSidebarVisible={isSidebarVisible}>
            <div sx={LibraryHeadingStyles}>Library</div>
            <div sx={BookGridStyles}>
                {libraryBooks.map(book => (
                    <div key={book.id} sx={BookStyles} onClick={() => navigate(`/library/book/${book.id}`)}>
                        <FontAwesomeIcon icon={faBook} size="5x" />
                        <div sx={BookTitleStyles}>{book.title}</div>
                    </div>
                ))}
            </div>
        </LoggedInPageWrapper>
    );
}
 
export default Library;