import { apiKey, hostapp } from "@/environments/environment";
import { ProductsPagination } from "./models/products";

const rootUrl = `${hostapp}/api/pricing/v1/products`;
const headers = new Headers();
headers.append('apiKey', apiKey);
headers.append('Content-Type', 'application/json');

export const getProducts = async (): Promise<ProductsPagination> => {
    const res = await fetch(rootUrl, {
        method: 'GET',
        headers: headers
    })
    const data: ProductsPagination = await res.json();

    return data;
}

export const getProductsPagination = async (body: any): Promise<ProductsPagination> => {
    const res = await fetch(rootUrl, {
        method: 'POST',
        headers: headers ,
        body: JSON.stringify(body)
    })
    const data: ProductsPagination = await res.json();

    return data;
}