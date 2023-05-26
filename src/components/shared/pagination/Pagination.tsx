/** @jsxImportSource theme-ui */

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonStyles } from "../../../Global.styles";
import { SearchParamPageType } from "../../../pages/library/book/Book";
import { PageButtonStyles, PageNumberStyles } from "./Pagination.styles";

export type PaginationProps = {
    page: number | undefined;
    totalPages: number | undefined;
    setPage: React.Dispatch<React.SetStateAction<SearchParamPageType>>;
    isLoading: boolean;
}

const Pagination = ({ page, totalPages, setPage, isLoading }: PaginationProps) => {
    return (
        <div sx={{ display: totalPages && totalPages > 1 ? "flex" : "none", alignItems: "center" }}>
            <button
                sx={{ ...ButtonStyles, ...PageButtonStyles }}
                onClick={() => {setPage(currentPage => Math.max(Number(currentPage) -1, 1))}}
                disabled={page === 1 || isLoading}
            >
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <div sx={PageNumberStyles}>{page?.toString()}</div>
            <button
                sx={{ ...ButtonStyles, ...PageButtonStyles }}
                onClick={() => {
                    if (page && totalPages && page < totalPages) {
                        setPage(currentPage => Number(currentPage) + 1)
                    }
                }}
                disabled={page === totalPages || isLoading}
            >
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    );
}
 
export default Pagination;