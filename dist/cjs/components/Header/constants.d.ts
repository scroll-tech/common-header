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
export { navigation };
