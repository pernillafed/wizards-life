/** @jsxImportSource theme-ui */

import { useEffect, useState } from "react";
import LoggedInPageWrapper from "../../../../../components/shared/logged-in-page-wrapper/LoggedInPageWrapper";
import { SidebarVisibilityProps } from "../../../../../components/sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { getSpells } from "../../../../../services/HPAPI";
import { useQuery } from "react-query";
import BackLink from "../../../../../components/shared/back-link/BackLink";
import { BookPageStyles } from "../../Book.styles";
import Heading from "../../../../../components/shared/heading/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandSparkles } from "@fortawesome/free-solid-svg-icons";
import { SpellDescriptionStyles, SpellPageWrapperStyles } from "./SpellPage.styles";

export type SpellType = {
  id: string;
  name: string;
  description: string;
};

const SpellPage = ({ isSidebarVisible }: SidebarVisibilityProps) => {
  const { spellId, bookId } = useParams();

  const [spell, setSpell] = useState<SpellType>();

  const { data, isLoading, isError, error } = useQuery(["spells"], () => getSpells());

  useEffect(() => {
    if (data && !isLoading && !isError) {
      const spellObject = data.find((item: SpellType) => item.id === spellId);
      if (spellObject) {
        setSpell(spellObject);
      }
    }
  });

  return (
    <LoggedInPageWrapper isSidebarVisible={isSidebarVisible}>
      <BackLink path={`/library/book/${bookId}`} text="Back to index" />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error!</div>}
      {data && spell && (
        <div
          sx={{
            ...BookPageStyles,
            ...SpellPageWrapperStyles,
          }}
        >
          <Heading text={spell.name} type="h1" color="secondaryText" isBookPageTitle={true} />
          <FontAwesomeIcon icon={faWandSparkles} size="lg" sx={{ color: "secondaryText" }} />
          <p sx={SpellDescriptionStyles}>{spell.description}</p>
        </div>
      )}
    </LoggedInPageWrapper>
  );
};

export default SpellPage;
