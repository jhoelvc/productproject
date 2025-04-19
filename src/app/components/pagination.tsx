export default function Pagination({pagination}: any) {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={'page-item ' + (pagination?.currentPage == 0 ? 'disabled' : '')}>
                    <a className="page-link">Anterior</a>
                </li>
                <li className="page-item">
                    <span className="px-2">Página {(pagination?.currentPage ?? 0) + 1} de {pagination?.pages ?? 0}</span>
                </li>
                <li className={'page-item ' + (pagination?.currentPage == pagination?.pages - 1 ? 'disabled' : '')}>
                    <a className="page-link" href="#">Siguiente</a>
                </li>
            </ul>
        </nav>
    )
}