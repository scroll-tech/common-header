import React from "react";
import "./Header.scss";
export interface HeaderProps {
    activeTab?: string;
    backgroundColor?: string;
    type?: "subdomain" | "path" | "custom";
    customNav?: any[];
}
declare class Header extends React.Component<HeaderProps, {
    open: boolean;
    navigation: any;
}> {
    constructor(props: HeaderProps);
    getHyperlink: (tab: any) => any;
    render(): React.ReactNode;
}
export default Header;
