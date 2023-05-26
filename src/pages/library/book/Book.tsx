/** @jsxImportSource theme-ui */

import { useState, useEffect, ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import libraryBooks from "../../../assets/data/libraryBooks.json";
import wizards from "../../../assets/data/wizards.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { BackLinkStyles, BookHeadingStyles, BookContentGridStyles, BookPageStyles, BookContentLinkStyles } from "./Book.styles";
import { SidebarVisibilityProps } from "../../../components/sidebar/Sidebar";
import { useQuery } from "react-query";
import { getHouses, getSpecies, getWands } from "../../../services/TheBoyWhoLivedAPI";
import { useUrlSearchParams } from "use-url-search-params";
import Pagination from "../../../components/shared/pagination/Pagination";
import BookContent from "./book-content/BookContent";
import LoggedInPageWrapper from "../../../components/shared/logged-in-page-wrapper/LoggedInPageWrapper";

export type BookType = {
    id: string;
    title: string;
    totalPages: number;
}

export type BookContentType = {
    name: string;
    urlParam: string;
}

export type QueryBookContentType = BookContentType & {
    dataGetter: (page: SearchParamPageType) => Promise<any>;
}

export type BookContentEntryType = {
    id: number;
    name: string;
}

export type SearchParamPageType = ReactNode & string | number | boolean | Object | Date | string[] | undefined;

const Book = ({ isSidebarVisible }: SidebarVisibilityProps) => {
    const { bookId } = useParams();

    const [searchParams, setSearchParams] = useUrlSearchParams({ page: 1 }, { page: Number });

    const [book, setBook] = useState<BookType>();
    const [page, setPage] = useState(searchParams.page);
    const [queryBookContent, setQueryBookContent] = useState<QueryBookContentType>();
    const [characterBookContent, setCharacterBookContent] = useState<BookContentType>();

    const {data, isLoading, isError, error} = useQuery([queryBookContent?.name, page], () => queryBookContent?.dataGetter(page));

    useEffect(() => {
        setSearchParams({ ...searchParams, page });
    }, [page]);

    useEffect(() => {
        setBook(libraryBooks.find(book => book.id === bookId));
        if (bookId === "1") {
            setQueryBookContent(undefined);
            setCharacterBookContent({ name: "characters", urlParam: "character" });
        }
        if (bookId === "2") {
            setQueryBookContent({ name: "houses", urlParam: "house", dataGetter: getHouses });
            setCharacterBookContent(undefined);
        }
        if (bookId === "3") {
            setQueryBookContent({ name: "species", urlParam: "species", dataGetter: getSpecies });
            setCharacterBookContent(undefined);
        }
        if (bookId === "4") {
            setQueryBookContent({ name: "wands", urlParam: "wand", dataGetter: getWands });
            setCharacterBookContent(undefined);
        }
    }, [bookId]);

    return (
        <LoggedInPageWrapper isSidebarVisible={isSidebarVisible}>
            <div sx={{ width: "100%" }}>
                <Link to="/library" sx={BackLinkStyles}>
                    <FontAwesomeIcon icon={faAngleLeft} sx={{ marginRight: "0.5rem" }} />
                    Back to Library
                </Link>
            </div>
            {isLoading && <div>Loading index...</div>}
            {isError && <div>Error!</div>}
            {!isLoading && !isError && data && (
                <>
                    <BookContent
                        book={book}
                        data={data}
                        bookId={bookId}
                        bookContent={queryBookContent}
                    />
                    <Pagination
                        page={page}
                        totalPages={book?.totalPages}
                        setPage={setPage}
                        isLoading={isLoading}
                    />
                </>
            )}
            {!isLoading && !isError && characterBookContent && (
                <BookContent
                    book={book}
                    data={wizards}
                    bookId={bookId}
                    bookContent={characterBookContent}
                />
            )}
        </LoggedInPageWrapper>
    );
}
 
export default Book;