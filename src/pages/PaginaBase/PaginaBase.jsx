import { Outlet } from "react-router-dom";
import Header from "../../components/Header/PageHeader.jsx"
import Container from "../../components/Container/Container.jsx"

function PaginaBase() {
    return (
        <main>
            <Header/>
            <Container>
                <Outlet />
            </Container>
        </main>
    )
}
export default PaginaBase;