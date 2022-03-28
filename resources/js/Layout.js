import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRouter from "./components/PrivateRouter";
import PublicHeader from "./components/common/PublicHeader";
import HomePage from "./pages/Home";
import AuthPage from "./pages/Auth";
import DashboardIndex from "./pages/dashboard";
const Layout = () => {
    return (
        <>
            <BrowserRouter>
                <PublicHeader />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/dashboard" element={
                        <PrivateRouter>
                            <DashboardIndex />
                        </PrivateRouter>
                    } />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Layout;
