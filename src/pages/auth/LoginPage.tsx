import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Eye, EyeOff } from "lucide-react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import AuthLayout from "@/layouts/AuthLayout";
import { useAuth } from "@/hooks/useAuth";

import {
    loginSchema,
    type LoginFormData,
} from "@/lib/validators/auth";

export default function LoginPage() {
    const navigate = useNavigate();

    const { signIn } = useAuth();

    const [showPassword, setShowPassword] =
        useState(false);

    const [loading, setLoading] =
        useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    async function onSubmit(data: LoginFormData) {
        try {
            setLoading(true);

            await signIn(
                data.email,
                data.password
            );

            toast.success(
                "Welcome back to NexaBank!"
            );

            navigate("/dashboard");

        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "Login failed.";

            toast.error(message);

        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Sign in to continue to NexaBank"
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
            >
                <div>

                    <label className="mb-2 block font-medium">
                        Email
                    </label>

                    <input
                        type="email"
                        {...register("email")}
                        placeholder="name@example.com"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    />

                    {errors.email && (
                        <p className="mt-2 text-sm text-red-600">
                            {errors.email.message}
                        </p>
                    )}

                </div>

                <div>

                    <label className="mb-2 block font-medium">
                        Password
                    </label>

                    <div className="relative">

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            {...register("password")}
                            placeholder="••••••••"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none focus:border-blue-600"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>

                    </div>

                    {errors.password && (
                        <p className="mt-2 text-sm text-red-600">
                            {errors.password.message}
                        </p>
                    )}

                </div>

                <div className="flex justify-end">

                    <Link
                        to="/forgot-password"
                        className="text-sm text-blue-600 hover:underline"
                    >
                        Forgot Password?
                    </Link>

                </div>

                <button
                    disabled={loading}
                    className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
                >
                    {loading
                        ? "Signing In..."
                        : "Sign In"}
                </button>

                <p className="text-center text-sm">

                    Don't have an account?{" "}

                    <Link
                        to="/register"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        Create one
                    </Link>

                </p>

            </form>
        </AuthLayout>
    );
}