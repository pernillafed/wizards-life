/** @jsxImportSource theme-ui */

import { HomeWrapperStyles, LoginOrCreateContainerStyles } from "./Home.styles";

const Home = () => {
    return (
        <div sx={HomeWrapperStyles} data-testid="home">
            <div sx={LoginOrCreateContainerStyles}>Login or create</div>
        </div>
    );
}
 
export default Home;