/** @jsxImportSource theme-ui */

import { Link, useParams } from "react-router-dom";
import LoggedInPageWrapper from "../../../../../components/shared/logged-in-page-wrapper/LoggedInPageWrapper";
import { SidebarVisibilityProps } from "../../../../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import species from "../../../../../assets/data/species.json";
import { BookPageStyles } from "../../Book.styles";
import BackLink from "../../../../../components/shared/back-link/BackLink";
import Heading from "../../../../../components/shared/heading/Heading";
import { ButtonStyles } from "../../../../../Global.styles";
import {
  CreatureContent,
  CreatureDistinctionsList,
  CreatureFacts,
  CreatureFactsList,
  CreatureImage,
  CreatureSubSpeciesContent,
} from "./CreaturePage.styles";

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
  const [speciesFamily, setSpeciesFamily] = useState<CreatureType>();

  const findSubSpecies = (species: CreatureType[]) => {
    let creatureData: CreatureType | undefined;
    species.forEach((creature) => {
      if (creature.sub_species) {
        creatureData = creature.sub_species.find((subSpecies) => subSpecies.id === speciesId);
        if (creatureData) {
          setData(creatureData);
          setSpeciesFamily(creature);
        } else {
          findSubSpecies(creature.sub_species);
        }
      }
    });
  };

  useEffect(() => {
    setData(undefined);
    setSpeciesFamily(undefined);
    window.scrollTo(0, 0);
    const firstLevelSpecies = species.find((creature) => creature.id === speciesId);
    if (firstLevelSpecies) {
      setData(firstLevelSpecies);
    } else {
      findSubSpecies(species);
    }
  }, [speciesId]);

  return (
    <LoggedInPageWrapper isSidebarVisible={isSidebarVisible}>
      {speciesFamily ? (
        <BackLink
          path={`/library/book/${bookId}/species/${speciesFamily.id}`}
          text={`Back to ${speciesFamily.name}`}
        />
      ) : (
        <BackLink path={`/library/book/${bookId}`} text="Back to index" />
      )}
      {data && (
        <div sx={BookPageStyles}>
          <Heading text={data.name} type="h1" color="secondaryText" isBookPageTitle={true} />
          <div sx={CreatureContent}>
            <div sx={CreatureFacts}>
              <img src={data.image_url} alt={data.name} sx={CreatureImage} />
              <ul sx={CreatureFactsList}>
                <li>
                  <b>Native:</b> {data.native ? data.native : "Unknown"}
                </li>
                {data.hair && (
                  <li>
                    <b>Hair:</b> {data.hair}
                  </li>
                )}
                {data.feathers && (
                  <li>
                    <b>Feathers:</b> {data.feathers}
                  </li>
                )}
                {data.eyes && (
                  <li>
                    <b>Eyes:</b> {data.eyes}
                  </li>
                )}
                {data.skin && (
                  <li>
                    <b>Skin:</b> {data.skin}
                  </li>
                )}
                {data.height && (
                  <li>
                    <b>Height:</b> {data.height}
                  </li>
                )}
                {data.length && (
                  <li>
                    <b>Length:</b> {data.length}
                  </li>
                )}
                <li>
                  <b>Mortality:</b> {data.mortality ? data.mortality : "Unknown"}
                </li>
                {data.classification && (
                  <li>
                    <b>Magical classification:</b> {data.classification}
                  </li>
                )}
              </ul>
            </div>
            {data.distinctions && (
              <div sx={{ marginTop: "2rem" }}>
                <Heading text="Distinctions" type="h2" color="secondaryText" />
                <ul sx={CreatureDistinctionsList}>
                  {data.distinctions.map((distinction, i) => (
                    <li key={i}>{distinction}</li>
                  ))}
                </ul>
              </div>
            )}
            {data.sub_species && (
              <div sx={{ marginTop: "2rem" }}>
                <Heading text="Sub species" type="h2" color="secondaryText" />
                <div sx={CreatureSubSpeciesContent}>
                  {data.sub_species.map((species) => (
                    <Link
                      key={species.id}
                      to={`/library/book/${bookId}/species/${species.id}`}
                      sx={{
                        ...ButtonStyles,
                        margin: "0.5rem 0.25rem",
                        backgroundColor: "primaryBackground",
                        fontWeight: "normal",
                        textDecoration: "none",
                        ":hover": { backgroundColor: "hoverPrimaryBackground" },
                      }}
                    >
                      {species.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </LoggedInPageWrapper>
  );
};

export default CreaturePage;
