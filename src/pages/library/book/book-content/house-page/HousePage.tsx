/** @jsxImportSource theme-ui */

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { SidebarVisibilityProps } from "../../../../../components/sidebar/Sidebar";
import { getHouse } from "../../../../../services/TheBoyWhoLivedAPI";
import { BookPageStyles, BookHeadingStyles } from "../../Book.styles";
import { HouseDescriptionListStyles } from "./HousePage.styles";
import LoggedInPageWrapper from "../../../../../components/shared/logged-in-page-wrapper/LoggedInPageWrapper";
import BackLink from "../../../../../components/shared/back-link/BackLink";

export type HouseHeadType = {
    id: number;
    name: string;
}

const HousePage = ({ isSidebarVisible }: SidebarVisibilityProps) => {
    const { houseId, bookId } = useParams();

    const { data, isLoading, isError, error } = useQuery(["house", houseId], () => getHouse(Number(houseId)));

    return ( 
        <LoggedInPageWrapper isSidebarVisible={isSidebarVisible}>
            <BackLink path={`/library/book/${bookId}`} text="Back to index" />
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error!</div>}
            {!isLoading && !isError && data && (
                <div sx={{ ...BookPageStyles, padding: "3rem 3rem 4rem 3rem" }}>
                    <div sx={BookHeadingStyles}>{data.name}</div>
                    <div sx={{ display: "grid", gridTemplateColumns: "4fr 7fr", gap: "2rem", alignItems: "center" }}>
                        <img src={data.image_url} alt={data.name} sx={{ width: "100%", justifySelf: "end" }} />
                        <ul sx={HouseDescriptionListStyles}>
                            <li sx={{ marginBottom: "0.25rem" }}><b>Founder:</b> {data.founder}</li>
                            <li sx={{ marginBottom: "0.25rem" }}><b>Element:</b> {data.element}</li>
                            <li sx={{ marginBottom: "0.25rem" }}><b>Animal:</b> {data.animal}</li>
                            <li sx={{ marginBottom: "0.25rem" }}><b>Colors:</b> {data.colors}</li>
                            <li sx={{ marginBottom: "0.25rem" }}><b>Traits:</b> {data.traits}</li>
                            <li sx={{ marginBottom: "0.25rem" }}><b>House ghost:</b> {data.ghost}</li>
                            <li sx={{ marginBottom: "0.25rem" }}><b>Common room:</b> {data.common_room}</li>
                            <li sx={{ marginBottom: "0.25rem" }}><b>Members:</b> {data.members}</li>
                            <li sx={{ marginBottom: "0.25rem" }}>
                                <b>Heads:</b> {data.heads.map((head: HouseHeadType, i: number) => (
                                    <span key={head.id}>{head.name}{i !== data.heads.length - 1 && ", "}</span>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </LoggedInPageWrapper>
    );
}
 
export default HousePage;