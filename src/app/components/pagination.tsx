import React, { useEffect } from "react";

export default function Pagination({ pagination, setFilter }: any) {
    const handleChangePage = (event: any) => {
        let currentPage: number = pagination?.currentPage + (event.target.innerText === 'Siguiente' ? 1 : -1);

        setFilter((o: any) => ({
            ...o,
            paging: { page: currentPage, size: 20 }
        }))
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={'page-item ' + (pagination?.currentPage == 0 ? 'disabled' : '')}>
                    <a className="page-link" href="#" onClick={handleChangePage}>Anterior</a>
                </li>
                <li className="page-item pt-2">
                    <span className="px-2">Página {(pagination?.currentPage ?? 0) + 1} de {pagination?.pages ?? 0}</span>
                </li>
                <li className={'page-item ' + (pagination?.currentPage == pagination?.pages - 1 ? 'disabled' : '')}>
                    <a className="page-link" href="#" onClick={handleChangePage}>Siguiente</a>
                </li>
            </ul>
        </nav>
    )
}