/** @jsxImportSource theme-ui */

import React from "react";
import { SidebarVisibilityProps } from "../../sidebar/Sidebar";
import { LoggedInPageWrapperStyles } from "./LoggedInPageWrapper.styles";

export type LoggedInPageWrapperProps = {
    children: React.ReactNode;
};

const LoggedInPageWrapper = ({ isSidebarVisible, children }: SidebarVisibilityProps & LoggedInPageWrapperProps) => {
    return (
        <div sx={isSidebarVisible ? { 
            ...LoggedInPageWrapperStyles, flexDirection: "column", alignItems: "center"
        } : {
            ...LoggedInPageWrapperStyles, flexDirection: "column", alignItems: "center", top: ["8vh", "10vh", "10vh"]
        }}>{children}</div>
    );
}
 
export default LoggedInPageWrapper;