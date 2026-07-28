import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { toast } from "sonner";

import AuthLayout from "@/layouts/AuthLayout";
import { supabase } from "@/services/supabase/client";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleReset() {
        try {
            setLoading(true);

            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/reset-password`,
            });

            if (error) throw error;

            toast.success("Password reset email sent.");

        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Unable to send reset email."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthLayout
            title="Forgot Password"
            subtitle="Enter your email to reset your password."
        >
            <div className="space-y-6">

                <div>
                    <label className="mb-2 block font-medium">
                        Email Address
                    </label>

                    <div className="relative">

                        <Mail className="absolute left-4 top-3 text-slate-400" />

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4"
                        />

                    </div>
                </div>

                <button
                    onClick={handleReset}
                    disabled={loading}
                    className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
                >
                    {loading
                        ? "Sending..."
                        : "Send Reset Link"}
                </button>

                <div className="text-center">

                    <Link
                        to="/login"
                        className="text-blue-600 hover:underline"
                    >
                        Back to Login
                    </Link>

                </div>

            </div>
        </AuthLayout>
    );
}