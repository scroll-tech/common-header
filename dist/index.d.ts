import React from 'react';

interface HeaderProps {
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

declare const navigation: ({
    name: string;
    description: string;
    subdomainOrPath: string;
    isExternal?: undefined;
    isActive?: undefined;
} | {
    name: string;
    description: string;
    isExternal: boolean;
    subdomainOrPath: string;
    isActive?: undefined;
} | {
    name: string;
    description: string;
    isActive: boolean;
    subdomainOrPath: string;
    isExternal?: undefined;
})[];

export { Header as CommonHeader, navigation };
