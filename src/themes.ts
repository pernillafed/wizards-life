import type { Theme } from 'theme-ui';

export const styleTheme: Theme = {
    fonts: {
        heading: "'IM Fell English SC', serif",
        paragraph: "'Source Sans Pro', sans-serif",
        newspaper: "'Fredericka the Great', serif"
    },
    colors: {
        primaryBackground: "#645140",
        secondaryBackground: "#47382b",
        primaryText: "#fff3c2",
        secondaryText: "#1a130d",
        hoverPrimaryBackground: "#6c5847",
        hoverPrimaryText: "#fff7d5",
        contentBackground: "#fff3c299"
    },
    fontSizes: {
        primaryHeading: "3rem",
        primaryHeadingMobile: "2.5rem",
        secondaryHeading: "2rem",
        secondaryHeadingMobile: "1.5rem",
    },
    transitions: {
        primaryBackground: "background-color 0.2s"
    }
}