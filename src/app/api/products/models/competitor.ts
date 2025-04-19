import { Price } from "./price";

export interface Competitor {
    productId?: number,
    storeId?: number,
    storeName?: string,
    name?: string,
    sku?: string,
    brand?: string,
    model?: string,
    url?: string,
    imageUrl?: string,
    status?: string,
    matchStatus?: string,
    created?: string,
    updated?: string,
    extracted?: string,
    prices?: Price
}