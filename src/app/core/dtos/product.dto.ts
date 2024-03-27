export interface ProductDto {
    id: number,
    name : string,
    price : number,
    thumbnail : string,
    description: string,
    product_images: {
        id: number;
        imageUrl: string;
    }[]
}