import SideBar from "@/app/components/sidebar";
import { render, screen } from "@testing-library/react";

describe('Sidebar', () => {
    it('Should be state and brand filters', () => {
        render(<SideBar />)
        expect(screen.getByText('Estado')).toBeInTheDocument();
        expect(screen.getByText('Marca')).toBeInTheDocument();
    })
})