import { Landmark } from "lucide-react";
import { Link } from "react-router-dom";

interface LogoProps {
    showText?: boolean;
}

export default function Logo({ showText = true }: LogoProps) {
    return (
        <Link
            to="/"
            className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-90"
        >
            {/* Logo Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
                <Landmark className="h-6 w-6 text-white" />
            </div>

            {/* Logo Text */}
            {showText && (
                <div>
                    <h1 className="text-xl font-bold tracking-tight text-slate-900">
                        NexaBank
                    </h1>

                    <p className="text-xs text-slate-500">
                        Secure Digital Banking
                    </p>
                </div>
            )}
        </Link>
    );
}