/** @jsxImportSource theme-ui */

import { SidebarVisibilityProps } from "../../../components/sidebar/Sidebar";
import {
  HomePageWrapperStyles,
  NewsHeadingStyles,
  GridStyles,
  FirstHeadingStyles,
  ThirdHeadingStyles,
  FifthHeadingStyles,
  SecondHeadingStyles,
  FourthHeadingStyles,
  SixthHeadingStyles,
} from "./Home.styles";
import hogwartsNews from "../../../assets/data/hogwartsNews.json";

const Home = ({ isSidebarVisible }: SidebarVisibilityProps) => {
  const getIdSpecificStyling = (newsId: string) => {
    if (newsId === "1") {
      return FirstHeadingStyles;
    }
    if (newsId === "2") {
      return SecondHeadingStyles;
    }
    if (newsId === "3") {
      return ThirdHeadingStyles;
    }
    if (newsId === "4") {
      return FourthHeadingStyles;
    }
    if (newsId === "5") {
      return FifthHeadingStyles;
    }
    if (newsId === "6") {
      return SixthHeadingStyles;
    }
  };

  return (
    <div
      sx={
        isSidebarVisible
          ? HomePageWrapperStyles
          : { ...HomePageWrapperStyles, top: ["8vh", "10vh", "10vh"] }
      }
    >
      <div sx={GridStyles}>
        {hogwartsNews.map((news) => (
          <div key={news.id} sx={{ ...NewsHeadingStyles, ...getIdSpecificStyling(news.id) }}>
            {news.headline}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
