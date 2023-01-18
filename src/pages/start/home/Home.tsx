/** @jsxImportSource theme-ui */

import { SidebarVisibilityProps } from "../../../components/sidebar/Sidebar";
import { LoggedInPageWrapperStyles } from "../../../Global.styles";
import { 
    NewsHeadingStyles,
    GridStyles,
    FirstHeadingStyles,
    ThirdHeadingStyles,
    FifthHeadingStyles,
    SecondHeadingStyles,
    FourthHeadingStyles,
    SixthHeadingStyles
} from "./Home.styles";

const Home = ({ isSidebarVisible }: SidebarVisibilityProps) => {
    return (
        <div sx={!isSidebarVisible ? { ...LoggedInPageWrapperStyles, top: ["8vh", "10vh", "10vh"] } : LoggedInPageWrapperStyles}>
            <div sx={GridStyles}>
                <div sx={{...NewsHeadingStyles, ...FirstHeadingStyles}}>
                    Quidditch: Hufflepuff wins against Slytherin
                </div>
                <div sx={{...NewsHeadingStyles, ...SecondHeadingStyles}}>
                    Everything half off at Scribbulus in Diagon Alley! Get your writing supplies now
                </div>
                <div sx={{...NewsHeadingStyles, ...ThirdHeadingStyles}}>
                    Sign up for the annual Wizards Chess Tour&shy;nament
                </div>
                <div sx={{...NewsHeadingStyles, ...FourthHeadingStyles}}>
                    Reminder: O.W.L.s in the Great Hall this Friday afternoon
                </div>
                <div sx={{...NewsHeadingStyles, ...FifthHeadingStyles}}>
                    Pick up your free copy of Professor Flitwick's dissertation on memory charms in the library!
                </div>
                <div sx={{...NewsHeadingStyles, ...SixthHeadingStyles}}>
                    The Shrieking Shack will be closed off for restoration purposes during the holidays
                </div>
            </div>
        </div>
    );
}
 
export default Home;