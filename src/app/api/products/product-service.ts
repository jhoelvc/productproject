import { apiKey, hostapp } from "@/environments/environment";
import { ProductsPagination } from "./models/products";

const rootUrl = `${hostapp}/api/pricing/v1/products`;

export const getProducts = async (): Promise<ProductsPagination> => {
    const res = await fetch(rootUrl, {
        method: 'GET',
        headers: { 'apiKey': apiKey }
    })
    const data: ProductsPagination = await res.json();
    
    return data;
}