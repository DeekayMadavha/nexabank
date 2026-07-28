// import { Navigate } from "react-router-dom";
// import { useAuth } from "@/hooks/useAuth";
// import type { ReactNode } from "react";
//
// interface ProtectedRouteProps {
//     children: ReactNode;
// }
//
// export default function ProtectedRoute({
//                                            children,
//                                        }: ProtectedRouteProps) {
//     const { user, loading } = useAuth();
//
//     // Wait while checking authentication
//     if (loading) {
//         return (
//             <div className="flex min-h-screen items-center justify-center">
//                 <h2 className="text-xl font-semibold text-slate-700">
//                     Loading...
//                 </h2>
//             </div>
//         );
//     }
//
//     // Redirect if not logged in
//     if (!user) {
//         return <Navigate to="/login" replace />;
//     }
//
//     // Allow access
//     return <>{children}</>;
// }

import { Navigate } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";

interface Props {
    children: React.ReactNode;
}

export default function ProtectedRoute({
                                           children,
                                       }: Props) {

    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Loading...
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}