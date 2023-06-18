/** @jsxImportSource theme-ui */

import { useParams } from "react-router-dom";
import LoggedInPageWrapper from "../../../../../components/shared/logged-in-page-wrapper/LoggedInPageWrapper";
import { SidebarVisibilityProps } from "../../../../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import species from "../../../../../assets/data/species.json";
import { BookPageStyles } from "../../Book.styles";
import BackLink from "../../../../../components/shared/back-link/BackLink";
import Heading from "../../../../../components/shared/heading/Heading";

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
};

const CreaturePage = ({ isSidebarVisible }: SidebarVisibilityProps) => {
  const { speciesId, bookId } = useParams();

  const [data, setData] = useState<CreatureType>();

  useEffect(() => {
    setData(species.find((creature) => creature.id === speciesId));
  }, [speciesId]);

  return (
    <LoggedInPageWrapper isSidebarVisible={isSidebarVisible}>
      <BackLink path={`/library/book/${bookId}`} text="Back to index" />
      {data && (
        <div sx={BookPageStyles}>
          <Heading text={data.name} type="h1" color="secondaryText" isBookPageTitle={true} />
          <div>
            <div>
              <img src={data.image_url} alt={data.name} sx={{ width: "30%" }} />
              <ul>
                <li>Native: {data.native ? data.native : "Unknown"}</li>
                {data.hair && <li>Hair: {data.hair}</li>}
                {data.feathers && <li>Feathers: {data.feathers}</li>}
                {data.eyes && <li>Eyes: {data.eyes}</li>}
                {data.skin && <li>Skin: {data.skin}</li>}
                {data.height && <li>Height: {data.height}</li>}
                {data.length && <li>Length: {data.length}</li>}
                <li>Mortality: {data.mortality ? data.mortality : "Unknown"}</li>
                {data.distinctions && (
                  <li>
                    Distinctions:
                    <ul>
                      {data.distinctions.map((distinction, i) => (
                        <li key={i}>{distinction}</li>
                      ))}
                    </ul>
                  </li>
                )}
                {data.classification && <li>Magical classification: {data.classification}</li>}
              </ul>
            </div>
            {data.sub_species && (
              <div>
                <Heading text="Sub species" type="h2" color="secondaryText" />
                {data.sub_species.map((species) => (
                  <div>{species.name}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </LoggedInPageWrapper>
  );
};

export default CreaturePage;
