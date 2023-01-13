export interface IProduct {
    id: number;
    name: string;
    price: number;
    category: string;
    brand: string;
    description: string;

}


export type IProductList = IProduct[]