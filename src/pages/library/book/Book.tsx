/** @jsxImportSource theme-ui */

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { LoggedInPageWrapperStyles } from "../../../Global.styles";
import libraryBooks from "../../../assets/data/libraryBooks.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { BackLinkStyles, BookTitleStyles, TitleWrapperStyles } from "./Book.styles";

export type BookType = {
    id: string;
    title: string;
}

const Book = () => {
    const { bookId } = useParams();

    const [book, setBook] = useState<BookType>()

    useEffect(() => {
        setBook(libraryBooks.find(book => book.id === bookId))
    }, [bookId]);

    return (
        <div sx={LoggedInPageWrapperStyles}>
            <div sx={TitleWrapperStyles}>
                <div>
                    <Link to="/library" sx={BackLinkStyles}>
                        <FontAwesomeIcon icon={faAngleLeft} sx={{ marginRight: "0.5rem" }} />
                        Back to Library
                    </Link>
                </div>
                <div sx={BookTitleStyles}>{book?.title}</div>
            </div>
        </div>
    );
}
 
export default Book;