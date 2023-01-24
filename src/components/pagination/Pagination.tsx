/** @jsxImportSource theme-ui */

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonStyles } from "../../Global.styles";
import { SearchParamPageType } from "../../pages/library/book/Book";

export type PaginationProps = {
    page: SearchParamPageType,
    setPage: React.Dispatch<React.SetStateAction<SearchParamPageType>>;
    data: any;
    isLoading: boolean;
}

const Pagination = ({ page, setPage, data, isLoading }: PaginationProps) => {
    return (
        <div sx={{ display: "flex" }}>
            <button
                sx={{ ...ButtonStyles, backgroundColor: "primaryBackground" }}
                onClick={() => {setPage(currentPage => Math.max(Number(currentPage) -1, 1))}}
                disabled={page === 1 || isLoading}
            >
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <div sx={{ margin: "0 1rem", color: "primaryText", fontWeigt: "bold", fontSize: "2rem" }}>{page?.toString()}</div>
            <button
                sx={{ ...ButtonStyles, backgroundColor: "primaryBackground" }}
                onClick={() => {
                    if (page && page < 33) {
                        setPage(currentPage => Number(currentPage) + 1)
                    }
                }}
                disabled={page === 33 || isLoading}
            >
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    );
}
 
export default Pagination;