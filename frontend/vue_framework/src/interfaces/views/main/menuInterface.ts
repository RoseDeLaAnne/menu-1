interface ICategory {
    name: string;
    displayName: string;
}

interface IType {
    id: number;
    name: string;
}

export interface IMenuData {
    id: number;
    category: ICategory;
    weight: number;
    name: string;
    displayName: string;
    price: number;
    types: IType[];
    imageUrl: string;
}
