import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/:city" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
