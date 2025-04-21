import { filters } from "../constants"
import React from "react";
import { FilterPagination } from "../models/filterPagination";

export default function SideBar({ setFilter }: any) {
    const handleInputChange = (event: any) => {
        let key = event.target.name === 'brands' ? 'brand' : 'status';
        let filter = filters[event.target.name as keyof typeof filters].find(o => o.id === Number(event.target.value));
        let value = null;

        if (event.target.name === 'brands') {
            value = Number(event.target.value) === 0 ? '' : filter?.name;
        } else {
            value = Number(event.target.value) === 0 ? [] : [filter?.name];
        }

        setFilter((o: FilterPagination) => ({
            ...o,
            paging: { page: 0, size: 20 },
            filters: { ...o.filters, [key]: value }
        }))
    }

    return (
        <>
            <h4 className="my-2">Filtros</h4>
            <div className="mb-3">
                <label htmlFor="state" className="form-label">Estado</label>
                <select className="form-select" aria-label="Default select example" id="state" name="states" onChange={handleInputChange}>
                    {filters.states.map((item: any) => (
                        <option key={item.id} value={item.id}>{item.description}</option>
                    ))}
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="brand" className="form-label">Marca</label>
                <select className="form-select" aria-label="Default select example" id="brand" name="brands" onChange={handleInputChange}>
                    {filters.brands.map((item: any) => (
                        <option key={item.id} value={item.id}>{item.description}</option>
                    ))}
                </select>
            </div>
        </>
    )
}