import { Paging } from "./paging";
import { Product } from "./product";

export interface ProductsPagination {
    paging: Paging,
    products: Array<Product>
}