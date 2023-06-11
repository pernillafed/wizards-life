/** @jsxImportSource theme-ui */

import { useParams } from "react-router-dom";
import LoggedInPageWrapper from "../../../../../components/shared/logged-in-page-wrapper/LoggedInPageWrapper";
import { SidebarVisibilityProps } from "../../../../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import species from "../../../../../assets/data/species.json";
import { BookPageStyles } from "../../Book.styles";
import BackLink from "../../../../../components/shared/back-link/BackLink";

export type CreatureType = {
    id: string;
    name: string;
    image_url: string;
    native: string | null;
    hair: string | null;
    feathers: string | null;
    eyes: string | null;
    skin: string | null;
    height: string | null;
    length: string | null;
    mortality: string | null;
    distinctions: string[] | null;
    classification: string | null;
    sub_species: CreatureType[] | null;
}

const CreaturePage = ({ isSidebarVisible }: SidebarVisibilityProps) => {
    const { speciesId, bookId } = useParams();

    const [data, setData] = useState<CreatureType>();

    useEffect(() => {
        setData(species.find(creature => creature.id === speciesId));
    }, [speciesId]);

    return (
        <LoggedInPageWrapper isSidebarVisible={isSidebarVisible}>
            <BackLink path={`/library/book/${bookId}`} text="Back to index" />
            {data && (
                <div sx={BookPageStyles}>{data.name}</div>
            )}
        </LoggedInPageWrapper>
    );
}
 
export default CreaturePage;