import { filters } from "../constants"

export default function SideBar({ onChangeState }: any) {
    const handleInputChange = (event: any) => {
        onChangeState({ input: event.target.name, value: Number(event.target.value) })
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