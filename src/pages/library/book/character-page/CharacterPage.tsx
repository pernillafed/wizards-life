/** @jsxImportSource theme-ui */

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { SidebarVisibilityProps } from "../../../../components/sidebar/Sidebar";
import { LoggedInPageWrapperStyles } from "../../../../Global.styles";
import { getCharacter } from "../../../../services/TheBoyWhoLivedAPI";
import { BackLinkStyles, BookPageStyles, BookTitleStyles } from "../Book.styles";
import { CharacterInfoList, CharacterImageStyles, CharacterGridStyles, CharacterDescriptionWrapperStyles, CharacterTitlesStyles } from "./CharacterPage.styles";

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
                <div sx={{...BookPageStyles, padding: "3rem 2rem 4rem 2rem"}}>
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
                    <div sx={CharacterGridStyles}>
                        <ul sx={CharacterInfoList}>
                            {data.nickname && <li sx={{ marginBottom: "0.25rem" }}>Nickname: {data.nickname}</li>}
                            <li sx={{ marginBottom: "0.25rem" }}>Gender: {data.gender ? data.gender : "Unknown"}</li>
                            <li sx={{ marginBottom: "0.25rem" }}>Born: {data.born ? data.born : "Unknown"}</li>
                            {data.died && <li sx={{ marginBottom: "0.25rem" }}>Died: {data.died}</li>}
                            <li sx={{ marginBottom: "0.25rem" }}>Blood: {data.blood ? data.blood : "Unknown"}</li>
                            <li sx={{ marginBottom: "0.25rem" }}>Nationality: {data.nationality ? data.nationality : "Unknown"}</li>
                            <li sx={{ marginBottom: "0.25rem" }}>Job: {data.job ? data.job : "Unknown"}</li>
                            {data.house && <li sx={{ marginBottom: "0.25rem" }}>Hogwarts house: {data.house.name}</li>}
                        </ul>
                        {data.image_url ? <img src={data.image_url} alt={data.name} sx={CharacterImageStyles} /> : "no image"}
                    </div>
                    <div sx={CharacterDescriptionWrapperStyles}>
                        <div>
                            <div sx={CharacterTitlesStyles}>Physical description</div>
                            <ul sx={{ listStyleType: "none", textAlign: "center", fontFamily: "paragraph", fontSize: "1.1rem" }}>
                                <li>Hair color: {data.hair ? data.hair : "Unknown"}</li>
                                <li>Eye color: {data.eyes ? data.eyes : "Unknown"}</li>
                                <li>Skin color: {data.skin ? data.skin : "Unknown"}</li>
                                {data.feathers && <li>Feathers: {data.feathers}</li>}
                                {data.height && <li>Height: {data.height}</li>}
                                {data.weight && <li>Weight: {data.weight}</li>}
                            </ul>
                        </div>
                        {data.blood && data.blood !== "Muggle" && (
                            <div>
                                <div sx={CharacterTitlesStyles}>Magical properties</div>
                                <ul sx={{ listStyleType: "none", textAlign: "center", fontFamily: "paragraph", fontSize: "1.1rem" }}>
                                    <li>Patronus: {data.patronus ? data.patronus : "Unknown"}</li>
                                    {data.animagus && <li>Animagus: {data.animagus}</li>}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default CharacterPage;