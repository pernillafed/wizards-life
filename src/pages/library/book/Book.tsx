/** @jsxImportSource theme-ui */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import libraryBooks from "../../../assets/data/libraryBooks.json";
import wizards from "../../../assets/data/wizards.json";
import species from "../../../assets/data/species.json";
import { SidebarVisibilityProps } from "../../../components/sidebar/Sidebar";
import { useQuery } from "react-query";
import { getHouses } from "../../../services/TheBoyWhoLivedAPI";
import BookContent from "./book-content/BookContent";
import LoggedInPageWrapper from "../../../components/shared/logged-in-page-wrapper/LoggedInPageWrapper";
import BackLink from "../../../components/shared/back-link/BackLink";
import { getSpells } from "../../../services/HPAPI";
import { CharacterType } from "./book-content/character-page/CharacterPage";
import { CreatureType } from "./book-content/creature-page/CreaturePage";

export type BookType = {
  id: string;
  title: string;
};

export type BookContentType = {
  name: string;
  urlParam: string;
};

export type QueryBookContentType = BookContentType & {
  dataGetter: () => Promise<any>;
};

export type JsonBookContentType = BookContentType & {
  jsonData: CharacterType[] | CreatureType[];
};

export type BookContentEntryType = {
  id: number;
  name: string;
};

const Book = ({ isSidebarVisible }: SidebarVisibilityProps) => {
  const { bookId } = useParams();

  const [book, setBook] = useState<BookType>();
  const [queryBookContent, setQueryBookContent] = useState<QueryBookContentType>();
  const [jsonBookContent, setJsonBookContent] = useState<JsonBookContentType>();

  const { data, isLoading, isError, error } = useQuery([queryBookContent?.name], () =>
    queryBookContent?.dataGetter()
  );

  useEffect(() => {
    setBook(libraryBooks.find((book) => book.id === bookId));
    if (bookId === "1") {
      setQueryBookContent(undefined);
      setJsonBookContent({ name: "characters", urlParam: "character", jsonData: wizards });
    }
    if (bookId === "2") {
      setQueryBookContent({ name: "houses", urlParam: "house", dataGetter: getHouses });
      setJsonBookContent(undefined);
    }
    if (bookId === "3") {
      setQueryBookContent(undefined);
      setJsonBookContent({ name: "species", urlParam: "species", jsonData: species });
    }
    if (bookId === "4") {
      setQueryBookContent({ name: "spells", urlParam: "spell", dataGetter: getSpells });
      setJsonBookContent(undefined);
    }
  }, [bookId]);

  return (
    <LoggedInPageWrapper isSidebarVisible={isSidebarVisible}>
      <BackLink path="/library" text="Back to Library" />
      {isLoading && <div>Loading index...</div>}
      {isError && <div>Error!</div>}
      {!isLoading && !isError && data && (
        <BookContent book={book} data={data} bookId={bookId} bookContent={queryBookContent} />
      )}
      {!isLoading && !isError && jsonBookContent && (
        <BookContent
          book={book}
          data={jsonBookContent.jsonData}
          bookId={bookId}
          bookContent={jsonBookContent}
        />
      )}
    </LoggedInPageWrapper>
  );
};

export default Book;
