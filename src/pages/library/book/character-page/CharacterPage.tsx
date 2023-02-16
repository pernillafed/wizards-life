/** @jsxImportSource theme-ui */

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { SidebarVisibilityProps } from "../../../../components/sidebar/Sidebar";
import { LoggedInPageWrapperStyles } from "../../../../Global.styles";
import { getCharacter } from "../../../../services/TheBoyWhoLivedAPI";
import { BackLinkStyles, BookPageStyles, BookTitleStyles } from "../Book.styles";

const CharacterPage = ({ isSidebarVisible }: SidebarVisibilityProps) => {
    const { characterId, bookId } = useParams();

    const {data, isLoading, isError, error} = useQuery(["character", characterId], () => getCharacter(characterId));

    return (
        <div sx={isSidebarVisible ? { 
            ...LoggedInPageWrapperStyles, flexDirection: "column", alignItems: "center"
        } : {
            ...LoggedInPageWrapperStyles, flexDirection: "column", alignItems: "center", top: ["8vh", "10vh", "10vh"]
        }}>
            <div sx={{ width: "100%" }}>
                <Link to={`/library/book/${bookId}`} sx={BackLinkStyles}>
                    <FontAwesomeIcon icon={faAngleLeft} sx={{ marginRight: "0.5rem" }} />
                    Back to index
                </Link>
            </div>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error!</div>}
            {!isLoading && !isError && data && (
                <div sx={BookPageStyles}>
                    <div sx={data.title ? {
                        ...BookTitleStyles, marginBottom: "0.5rem"
                    } : BookTitleStyles}>{data.name}</div>
                    {data.title && <div sx={{
                        ...BookTitleStyles,
                        fontSize: [
                            "secondaryHeadingMobile",
                            "secondaryHeadingMobile",
                            "secondaryHeading"
                        ]}}>"{data.title}"</div>}
                    <div sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        <ul sx={{ listStyleType: "none", textAlign: "right" }}>
                            {data.nickname && <li>Nickname: {data.nickname}</li>}
                            <li>Gender: {data.gender ? data.gender : "Unknown"}</li>
                            <li>Born: {data.born ? data.born : "Unknown"}</li>
                            {data.died && <li>Died: {data.died}</li>}
                            <li>Blood: {data.blood ? data.blood : "Unknown"}</li>
                            <li>Nationality: {data.nationality ? data.nationality : "Unknown"}</li>
                        </ul>
                        {data.image_url ? <img src={data.image_url} alt={data.name} /> : "no image"}
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default CharacterPage;