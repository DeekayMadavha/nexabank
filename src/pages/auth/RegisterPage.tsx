import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Eye, EyeOff } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import AuthLayout from "@/layouts/AuthLayout";
import { useAuth } from "@/hooks/useAuth";

import {
    registerSchema,
    type RegisterFormData,
} from "@/lib/validators/register";

export default function RegisterPage() {
    const navigate = useNavigate();

    const { signUp } = useAuth();

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    // async function onSubmit(data: RegisterFormData) {
    //     try {
    //         setLoading(true);
    //
    //         const fullName = `${data.firstName} ${data.lastName}`;
    //
    //         await signUp(
    //             data.email,
    //             data.password,
    //             fullName
    //         );
    //
    //         toast.success(
    //             "Account created successfully!"
    //         );
    //
    //         navigate("/verify-email");
    //
    //     } catch (error) {
    //         const message =
    //             error instanceof Error
    //                 ? error.message
    //                 : "Registration failed.";
    //
    //         toast.error(message);
    //
    //     } finally {
    //         setLoading(false);
    //     }
    // }
    async function onSubmit(data: RegisterFormData) {
        console.log("Form submitted!");
        console.log(data);

        try {
            setLoading(true);

            const fullName = `${data.firstName} ${data.lastName}`;

            await signUp(
                data.email,
                data.password,
                fullName
            );

            console.log("Signup successful!");

            toast.success("Account created successfully!");

            navigate("/verify-email");

        } catch (error) {
            console.error(error);

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Registration failed."
            );

        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthLayout
            title="Open Your NexaBank Account"
            subtitle="Create your secure banking profile."
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >
                <div className="grid grid-cols-2 gap-4">

                    <div>
                        <label className="mb-2 block">
                            First Name
                        </label>

                        <input
                            {...register("firstName")}
                            className="w-full rounded-xl border p-3"
                        />

                        {errors.firstName && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.firstName.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block">
                            Last Name
                        </label>

                        <input
                            {...register("lastName")}
                            className="w-full rounded-xl border p-3"
                        />

                        {errors.lastName && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.lastName.message}
                            </p>
                        )}
                    </div>

                </div>

                <div>

                    <label className="mb-2 block">
                        Email
                    </label>

                    <input
                        type="email"
                        {...register("email")}
                        className="w-full rounded-xl border p-3"
                    />

                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}

                </div>

                <div>
                    <label className="mb-2 block">
                        Mobile Number
                    </label>

                    <input
                        type="tel"
                        placeholder="0821234567"
                        {...register("phone")}
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    />

                    {errors.phone && (
                        <p className="mt-2 text-sm text-red-600">
                            {errors.phone.message}
                        </p>
                    )}
                </div>

                <div>

                    <label className="mb-2 block">
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
                            className="w-full rounded-xl border p-3 pr-12"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                            {showPassword
                                ? <EyeOff size={18} />
                                : <Eye size={18} />}
                        </button>

                    </div>

                    {errors.password && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.password.message}
                        </p>
                    )}

                </div>

                <div>

                    <label className="mb-2 block">
                        Confirm Password
                    </label>

                    <div className="relative">

                        <input
                            type={
                                showConfirmPassword
                                    ? "text"
                                    : "password"
                            }
                            {...register("confirmPassword")}
                            className="w-full rounded-xl border p-3 pr-12"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword(
                                    !showConfirmPassword
                                )
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                            {showConfirmPassword
                                ? <EyeOff size={18} />
                                : <Eye size={18} />}
                        </button>

                    </div>

                    {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.confirmPassword.message}
                        </p>
                    )}

                </div>

                <div className="flex items-start gap-3">

                    <input
                        type="checkbox"
                        {...register("acceptTerms")}
                    />

                    <label className="text-sm">
                        I agree to the Terms &
                        Conditions.
                    </label>

                </div>

                {errors.acceptTerms && (
                    <p className="text-sm text-red-500">
                        {errors.acceptTerms.message}
                    </p>
                )}

                <button
                    disabled={loading}
                    className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                >
                    {loading
                        ? "Creating Account..."
                        : "Create Account"}
                </button>

                <p className="text-center text-sm">

                    Already have an account?

                    <Link
                        to="/login"
                        className="ml-2 text-blue-600 hover:underline"
                    >
                        Sign In
                    </Link>

                </p>

            </form>
        </AuthLayout>
    );
}