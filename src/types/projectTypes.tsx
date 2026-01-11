export type ProductType = 'shirt' | 'pants' | 'hoodie';

// Product Listing
export interface Product {
    id: string,
    name: string,
    description: string,
    price: number,
    sizes: Array<string>,
    images: Array<string>,
    itemPoints: Array<string>,
    type: ProductType,
    color: string,
    tags: Array<string>,
}