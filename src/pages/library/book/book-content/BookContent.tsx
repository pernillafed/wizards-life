/** @jsxImportSource theme-ui */

import { Link } from "react-router-dom";
import { BookContentEntryType, BookContentType, BookType, QueryBookContentType } from "../Book";
import { BookPageStyles, BookHeadingStyles, BookContentGridStyles, BookContentLinkStyles } from "../Book.styles";

export type BookContentProps = {
    book: BookType | undefined;
    data: any;
    bookId: string | undefined;
    bookContent: BookContentType | QueryBookContentType | undefined;
}

const BookContent = ({ book, data, bookId, bookContent }: BookContentProps) => {
    return (
        <div sx={BookPageStyles}>
            <div sx={BookHeadingStyles}>{book?.title}</div>
            <div sx={BookContentGridStyles}>
                {data.map((bookContentEntry: BookContentEntryType) => (
                    <div key={bookContentEntry.id}>
                        <Link
                            to={`/library/book/${bookId}/${bookContent?.urlParam}/${bookContentEntry.id}`}
                            sx={BookContentLinkStyles}
                        >{bookContentEntry.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default BookContent;