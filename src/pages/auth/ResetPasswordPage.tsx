import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import AuthLayout from "@/layouts/AuthLayout";
import { supabase } from "@/services/supabase/client";

export default function ResetPasswordPage() {

    const navigate = useNavigate();

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);

    async function handleReset() {

        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        try {

            setLoading(true);

            const { error } =
                await supabase.auth.updateUser({
                    password,
                });

            if (error) throw error;

            toast.success("Password updated.");

            navigate("/login");

        } catch (error) {

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Unable to reset password."
            );

        } finally {

            setLoading(false);

        }
    }

    return (
        <AuthLayout
            title="Create New Password"
            subtitle="Choose a secure password."
        >
            <div className="space-y-5">

                <div>

                    <label className="mb-2 block">
                        New Password
                    </label>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className="w-full rounded-xl border p-3"
                    />

                </div>

                <div>

                    <label className="mb-2 block">
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                        className="w-full rounded-xl border p-3"
                    />

                </div>

                <button
                    onClick={handleReset}
                    disabled={loading}
                    className="w-full rounded-xl bg-blue-600 py-3 text-white"
                >
                    {loading
                        ? "Updating..."
                        : "Update Password"}
                </button>

            </div>
        </AuthLayout>
    );
}