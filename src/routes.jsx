import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import PaginaBase from "./pages/PaginaBase/PaginaBase.jsx"
import Page404 from "./pages/Pagina404/Pagina404.jsx"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Home />} />
                    <Route path=":section" element={<Home />} /> 
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
