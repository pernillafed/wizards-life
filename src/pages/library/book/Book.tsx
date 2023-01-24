/** @jsxImportSource theme-ui */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoggedInPageWrapperStyles } from "../../../Global.styles";
import libraryBooks from "../../../assets/data/libraryBooks.json";

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
            <div sx={{ color: "primaryText", fontFamily: "heading", fontSize: "primaryHeading" }}>{book?.title}</div>
        </div>
    );
}
 
export default Book;