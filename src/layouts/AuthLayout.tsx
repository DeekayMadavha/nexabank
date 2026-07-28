import type { ReactNode } from "react";
import { Landmark } from "lucide-react";

interface AuthLayoutProps {
    title: string;
    subtitle: string;
    children: ReactNode;
}

export default function AuthLayout({
                                       title,
                                       subtitle,
                                       children,
                                   }: AuthLayoutProps) {
    return (
        <div className="grid min-h-screen lg:grid-cols-2">

            {/* Left Side */}

            <div className="hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 p-16 text-white lg:flex lg:flex-col lg:justify-between">

                <div className="flex items-center gap-3">

                    <Landmark size={40} />

                    <h1 className="text-3xl font-bold">
                        NexaBank
                    </h1>

                </div>

                <div>

                    <h2 className="text-5xl font-bold leading-tight">
                        Banking
                        <br />
                        Built for Tomorrow.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-blue-100">
                        Secure digital banking for modern South Africans.
                    </p>

                </div>

                <p className="text-blue-200">
                    © 2026 NexaBank
                </p>

            </div>

            {/* Right Side */}

            <div className="flex items-center justify-center bg-slate-50 p-10">

                <div className="w-full max-w-md">

                    <h2 className="text-4xl font-bold">
                        {title}
                    </h2>

                    <p className="mt-3 text-slate-600">
                        {subtitle}
                    </p>

                    <div className="mt-10">
                        {children}
                    </div>

                </div>

            </div>

        </div>
    );
}