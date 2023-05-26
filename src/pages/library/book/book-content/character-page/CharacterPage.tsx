/** @jsxImportSource theme-ui */

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SidebarVisibilityProps } from "../../../../../components/sidebar/Sidebar";
import { BackLinkStyles, BookPageStyles, BookHeadingStyles } from "../../Book.styles";
import { CharacterInfoList, CharacterImageStyles, CharacterGridStyles, CharacterDescriptionWrapperStyles, CharacterTitlesStyles } from "./CharacterPage.styles";
import wizards from "../../../../../assets/data/wizards.json";
import LoggedInPageWrapper from "../../../../../components/shared/logged-in-page-wrapper/LoggedInPageWrapper";

export type CharacterType = {
    id: number;
    name: string;
    nickname: string | null;
    image_url: string;
    born: string | null;
    died: string | null;
    blood: string | null;
    nationality: string | null;
    species: string | null;
    gender: string | null;
    height: string | null;
    weight: string | null;
    hair: string | null;
    eyes: string | null;
    patronus: string | null;
    animagus: string | null;
    wand: {
        length: string | null,
        wood: string | null,
        core: string | null
    };
    job: string | null;
    house: string | null;
}

const CharacterPage = ({ isSidebarVisible }: SidebarVisibilityProps) => {
    const { characterId, bookId } = useParams();

    const [data, setData] = useState<CharacterType>();

    useEffect(() => {
        setData(wizards.find(wizard => wizard.id.toString() === characterId));
    }, [characterId]);

    return (
        <LoggedInPageWrapper isSidebarVisible={isSidebarVisible}>
            <div sx={{ width: "100%" }}>
                <Link to={`/library/book/${bookId}`} sx={BackLinkStyles}>
                    <FontAwesomeIcon icon={faAngleLeft} sx={{ marginRight: "0.5rem" }} />
                    Back to index
                </Link>
            </div>
            {data && (
                <div sx={{...BookPageStyles, padding: "3rem 2.5rem 4rem 2.5rem"}}>
                    <div sx={data.nickname ? {
                        ...BookHeadingStyles, marginBottom: "0.5rem"
                    } : BookHeadingStyles}>{data.name}</div>
                    {data.nickname && <div sx={{
                        ...BookHeadingStyles,
                        fontSize: [
                            "secondaryHeadingMobile",
                            "secondaryHeadingMobile",
                            "secondaryHeading"
                        ]}}>"{data.nickname}"</div>}
                    <div sx={CharacterGridStyles}>
                        <ul sx={CharacterInfoList}>
                            <li sx={{ marginBottom: "0.25rem" }}><b>Gender:</b> {data.gender ? data.gender : "Unknown"}</li>
                            <li sx={{ marginBottom: "0.25rem" }}><b>Species:</b> {data.species ? data.species : "Unknown"}</li>
                            <li sx={{ marginBottom: "0.25rem" }}><b>Born:</b> {data.born ? data.born : "Unknown"}</li>
                            {data.died && <li sx={{ marginBottom: "0.25rem" }}><b>Died:</b> {data.died}</li>}
                            <li sx={{ marginBottom: "0.25rem" }}><b>Blood status:</b> {data.blood ? data.blood : "Unknown"}</li>
                            <li sx={{ marginBottom: "0.25rem" }}><b>Nationality:</b> {data.nationality ? data.nationality : "Unknown"}</li>
                            <li sx={{ marginBottom: "0.25rem" }}><b>Job:</b> {data.job ? data.job : "Unknown"}</li>
                            {data.house && <li sx={{ marginBottom: "0.25rem" }}><b>Hogwarts house:</b> {data.house}</li>}
                        </ul>
                        <img src={data.image_url} alt={data.name} sx={CharacterImageStyles} />
                    </div>
                    <div sx={CharacterDescriptionWrapperStyles}>
                        <div>
                            <div sx={CharacterTitlesStyles}>Physical description</div>
                            <ul sx={{ listStyleType: "none", textAlign: "center", fontFamily: "paragraph", fontSize: "1.1rem" }}>
                                <li><b>Hair color:</b> {data.hair ? data.hair : "Unknown"}</li>
                                <li><b>Eye color:</b> {data.eyes ? data.eyes : "Unknown"}</li>
                                {data.height && <li><b>Height:</b> {data.height}</li>}
                                {data.weight && <li><b>Weight:</b> {data.weight}</li>}
                            </ul>
                        </div>
                        <div>
                            <div sx={CharacterTitlesStyles}>Magical properties</div>
                            <ul sx={{ listStyleType: "none", textAlign: "center", fontFamily: "paragraph", fontSize: "1.1rem" }}>
                                <li><b>Wand:</b>&nbsp;
                                    {data.wand.length ? data.wand.length : "Unknown length"},&nbsp;
                                    {data.wand.wood ? data.wand.wood.toLowerCase() : "unknown wood"},&nbsp;
                                    {data.wand.core ? data.wand.core.toLowerCase() : "unknown"} core
                                </li>
                                <li><b>Patronus:</b> {data.patronus ? data.patronus : "Unknown"}</li>
                                {data.animagus && <li><b>Animagus:</b> {data.animagus}</li>}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </LoggedInPageWrapper>
    );
}
 
export default CharacterPage;