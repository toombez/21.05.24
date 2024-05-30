import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index";
import Layout from "./Layout";
import SinglePlacePage from "./pages/SinglePlacePage";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<IndexPage />} />
                <Route path="place/:id" element={<SinglePlacePage />} />
            </Route>
        </Routes>
    )
}

export default Router
