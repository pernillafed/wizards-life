/** @jsxImportSource theme-ui */

import { 
    HomeWrapperStyles,
    NewsHeadingStyles,
    GridStyles,
    FirstHeadingStyles,
    ThirdHeadingStyles,
    FifthHeadingStyles,
    SecondHeadingStyles,
    FourthHeadingStyles,
    SixthHeadingStyles
} from "./Home.styles";

const Home = () => {
    return (
        <div sx={HomeWrapperStyles}>
            <div sx={GridStyles}>
                <div sx={{...NewsHeadingStyles, ...FirstHeadingStyles}}>
                    Quidditch: Hufflepuff wins against Slytherin
                </div>
                <div sx={{...NewsHeadingStyles, ...SecondHeadingStyles}}>
                    Everything half off at Scribbulus in Diagon Alley! Get your writing supplies now
                </div>
                <div sx={{...NewsHeadingStyles, ...ThirdHeadingStyles}}>
                    Sign up for the annual Wizards Chess Tournament
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