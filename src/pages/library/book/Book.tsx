/** @jsxImportSource theme-ui */

import { useState, useEffect, ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { LoggedInPageWrapperStyles } from "../../../Global.styles";
import libraryBooks from "../../../assets/data/libraryBooks.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { BackLinkStyles, BookTitleStyles, CharacterGridStyles, CharacterLinkStyles, TitleWrapperStyles } from "./Book.styles";
import { SidebarVisibilityProps } from "../../../components/sidebar/Sidebar";
import { useQuery } from "react-query";
import { getCharacters } from "../../../services/TheBoyWhoLivedAPI";
import { useUrlSearchParams } from "use-url-search-params";
import Pagination from "../../../components/pagination/Pagination";

export type BookType = {
    id: string;
    title: string;
}

export type CharacterType = {
    id: number;
    name: string;
    species: string;
    image_url: string;
}

export type SearchParamPageType = ReactNode & string | number | boolean | Object | Date | string[] | undefined;

const Book = ({ isSidebarVisible }: SidebarVisibilityProps) => {
    const { bookId } = useParams();

    const [searchParams, setSearchParams] = useUrlSearchParams({ page: 1 }, { page: Number });

    const [book, setBook] = useState<BookType>();
    const [page, setPage] = useState(searchParams.page);

    const {data, isLoading, isError, error} = useQuery(["characters", page], () => getCharacters(page));

    useEffect(() => {
        setBook(libraryBooks.find(book => book.id === bookId))
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
                    <div sx={CharacterGridStyles}>
                        {data.map((character: CharacterType) => (
                            <Link
                                to={`/library/book/${bookId}/character/${character.id}`}
                                key={character.id}
                                sx={CharacterLinkStyles}
                            >{character.name}</Link>
                        ))}
                    </div>
                    <Pagination page={page} setPage={setPage} data={data} isLoading={isLoading} />
                </>
            )}
        </div>
    );
}
 
export default Book;