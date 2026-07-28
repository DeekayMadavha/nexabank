import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import "./styles/globals.css";

import { Toaster} from "sonner";

import {AuthProvider} from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AppRouter />
        <AuthProvider>
            <AppRouter />
            <Toaster richColors position="top-right" />
        </AuthProvider>

    </React.StrictMode>
);