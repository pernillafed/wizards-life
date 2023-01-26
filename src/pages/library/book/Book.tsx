/** @jsxImportSource theme-ui */

import { useState, useEffect, ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { LoggedInPageWrapperStyles } from "../../../Global.styles";
import libraryBooks from "../../../assets/data/libraryBooks.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { BackLinkStyles, BookTitleStyles, BookContentGridStyles, BookContentLinkStyles, TitleWrapperStyles } from "./Book.styles";
import { SidebarVisibilityProps } from "../../../components/sidebar/Sidebar";
import { useQuery } from "react-query";
import { getCharacters, getHouses, getSpecies, getWands } from "../../../services/TheBoyWhoLivedAPI";
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
    dataGetter: (page: SearchParamPageType) => Promise<any>;
}

export type CharacterType = {
    id: number;
    name: string;
    species: string;
    image_url: string;
}

export type BookContentEntryType = CharacterType;

export type SearchParamPageType = ReactNode & string | number | boolean | Object | Date | string[] | undefined;

const Book = ({ isSidebarVisible }: SidebarVisibilityProps) => {
    const { bookId } = useParams();

    const [searchParams, setSearchParams] = useUrlSearchParams({ page: 1 }, { page: Number });

    const [book, setBook] = useState<BookType>();
    const [page, setPage] = useState(searchParams.page);
    const [bookContent, setBookContent] = useState<BookContentType>();

    const {data, isLoading, isError, error} = useQuery([bookContent?.name, page], () => bookContent?.dataGetter(page));

    useEffect(() => {
        setSearchParams({ ...searchParams, page });
    }, [page]);

    useEffect(() => {
        setBook(libraryBooks.find(book => book.id === bookId))
        if (bookId === "1") {
            setBookContent({ name: "characters", urlParam: "character", dataGetter: getCharacters })
        }
        if (bookId === "2") {
            setBookContent({ name: "houses", urlParam: "house", dataGetter: getHouses })
        }
        if (bookId === "3") {
            setBookContent({ name: "species", urlParam: "species", dataGetter: getSpecies })
        }
        if (bookId === "4") {
            setBookContent({ name: "wands", urlParam: "wand", dataGetter: getWands })
        }
    }, [bookId]);

    return (
        <div sx={isSidebarVisible ? { 
            ...LoggedInPageWrapperStyles, flexDirection: "column", alignItems: "center"
        } : {
            ...LoggedInPageWrapperStyles, flexDirection: "column", alignItems: "center", top: ["8vh", "10vh", "10vh"]
        }}>
            <div sx={TitleWrapperStyles}>
                <div>
                    <Link to="/library" sx={BackLinkStyles}>
                        <FontAwesomeIcon icon={faAngleLeft} sx={{ marginRight: "0.5rem" }} />
                        Back to Library
                    </Link>
                </div>
                <div sx={BookTitleStyles}>{book?.title}</div>
            </div>
            {isLoading && <div>Loading index...</div>}
            {isError && <div>Error!</div>}
            {!isLoading && !isError && data && (
                <>
                    <div sx={BookContentGridStyles}>
                        {data.map((bookContentEntry: BookContentEntryType) => (
                            <Link
                                to={`/library/book/${bookId}/${bookContent?.urlParam}/${bookContentEntry.id}`}
                                key={bookContentEntry.id}
                                sx={BookContentLinkStyles}
                            >{bookContentEntry.name}</Link>
                        ))}
                    </div>
                    <Pagination
                        page={page}
                        totalPages={book?.totalPages}
                        setPage={setPage}
                        isLoading={isLoading}
                    />
                </>
            )}
        </div>
    );
}
 
export default Book;