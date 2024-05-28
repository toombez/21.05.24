import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index";
import Layout from "./Layout";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<IndexPage />} />
            </Route>
        </Routes>
    )
}

export default Router
