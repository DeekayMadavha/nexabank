import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from '@/layouts/MainLayout';
import LandingPage from "@/pages/landing/LandingPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<LandingPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}