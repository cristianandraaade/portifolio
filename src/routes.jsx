import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";
import Projetos from "./pages/Projetos/Projetos.jsx";
import Contato from "./pages/Contato/Contato.jsx";
import PaginaBase from "./pages/PaginaBase/PaginaBase.jsx"
import Page404 from "./pages/Pagina404/Pagina404.jsx"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="sobre" element={<Sobre />} />
                    <Route path="projetos" element={<Projetos />} />
                    <Route path="contato" element={<Contato />} />
                </Route>
                <Route path="*" element={<Page404/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
