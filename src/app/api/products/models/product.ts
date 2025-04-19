import { Categorie } from "./categorie"
import { Competitor } from "./competitor"
import { Price } from "./price"

export interface Product {
    productId?: number,
    storeId?: number,
    storeName?: string,
    name?: string,
    sku?: string,
    brand?: string,
    url?: string,
    imageUrl?: string,
    status?: string,
    created?: string,
    updated?: string,
    extracted?: string,
    prices?: Price
    categories?: Categorie
    competitors?: Array<Competitor>
}