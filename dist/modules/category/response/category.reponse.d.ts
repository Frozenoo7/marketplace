interface child {
    id: string;
    name: string;
    description?: string;
    icon: string;
    isActive: boolean;
}
export declare class ICategoryResponse {
    id: string;
    name: string;
    description?: string;
    icon: string;
    isActive: boolean;
    childrens: child[];
}
export {};
