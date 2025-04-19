import Pagination from "./pagination"

const columns = [
	{ id: 1, name: 'Nombre' },
	{ id: 2, name: 'Tienda' },
	{ id: 3, name: 'Precio Normal' },
	{ id: 4, name: 'Precio Oferta' },
	{ id: 5, name: 'Precio Mas Bajo' },
	{ id: 6, name: 'Descuento' }

]

export default function Table({ data }: any) {
	return (
		<div className="table-responsive">
			<table className="table table-striped table-hover">
				<thead className="table-primary">
					<tr>
						{columns.map((col: any) => (
							<th key={col.id} scope="col">{col.name}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.products?.map((item: any) => (
						<tr key={item.productId}>
							<td>{item.name}</td>
							<td>{item.storeName}</td>
							<td>{item.prices.normalPrice}</td>
							<td>{item.prices.offerPrice ?? '-'}</td>
							<td>{item.prices.lowest}</td>
							<td>{((item.prices.normalPrice - item.prices.lowest)/item.prices.normalPrice) * 100}</td>
						</tr>
					))}
				</tbody>
			</table>

			<Pagination pagination={data.paging}></Pagination>
		</div>
	)
}