import { ProductDto } from "./product.dto";

export interface ProductsInCartDto {
    products: ProductDto,
    quantity: number,
    size: number
}