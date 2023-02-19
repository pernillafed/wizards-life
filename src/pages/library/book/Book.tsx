/** @jsxImportSource theme-ui */

import { useState, useEffect, ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { LoggedInPageWrapperStyles } from "../../../Global.styles";
import libraryBooks from "../../../assets/data/libraryBooks.json";
import wizards from "../../../assets/data/wizards.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { BackLinkStyles, BookTitleStyles, BookContentGridStyles, BookPageStyles, BookContentLinkStyles } from "./Book.styles";
import { SidebarVisibilityProps } from "../../../components/sidebar/Sidebar";
import { useQuery } from "react-query";
import { getHouses, getSpecies, getWands } from "../../../services/TheBoyWhoLivedAPI";
import { useUrlSearchParams } from "use-url-search-params";
import Pagination from "../../../components/pagination/Pagination";

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
    const [bookContent, setBookContent] = useState<QueryBookContentType>();
    const [characterBook, setCharacterBook] = useState<BookContentType>();

    const {data, isLoading, isError, error} = useQuery([bookContent?.name, page], () => bookContent?.dataGetter(page));

    useEffect(() => {
        setSearchParams({ ...searchParams, page });
    }, [page]);

    useEffect(() => {
        setBook(libraryBooks.find(book => book.id === bookId));
        if (bookId === "1") {
            setBookContent(undefined);
            setCharacterBook({ name: "characters", urlParam: "character" });
        }
        if (bookId === "2") {
            setBookContent({ name: "houses", urlParam: "house", dataGetter: getHouses });
            setCharacterBook(undefined);
        }
        if (bookId === "3") {
            setBookContent({ name: "species", urlParam: "species", dataGetter: getSpecies });
            setCharacterBook(undefined);
        }
        if (bookId === "4") {
            setBookContent({ name: "wands", urlParam: "wand", dataGetter: getWands });
            setCharacterBook(undefined);
        }
    }, [bookId]);

    return (
        <div sx={isSidebarVisible ? { 
            ...LoggedInPageWrapperStyles, flexDirection: "column", alignItems: "center"
        } : {
            ...LoggedInPageWrapperStyles, flexDirection: "column", alignItems: "center", top: ["8vh", "10vh", "10vh"]
        }}>
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
                    <div sx={BookPageStyles}>
                        <div sx={BookTitleStyles}>{book?.title}</div>
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
                    <Pagination
                        page={page}
                        totalPages={book?.totalPages}
                        setPage={setPage}
                        isLoading={isLoading}
                    />
                </>
            )}
            {!isLoading && !isError && characterBook && (
                <div sx={BookPageStyles}>
                    <div sx={BookTitleStyles}>{book?.title}</div>
                    <div sx={BookContentGridStyles}>
                        {wizards.map(wizard => (
                            <div key={wizard.id}>
                                <Link
                                    to={`/library/book/${bookId}/${characterBook?.urlParam}/${wizard.id}`}
                                    sx={BookContentLinkStyles}
                                >{wizard.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default Book;