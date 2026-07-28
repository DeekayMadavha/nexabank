import { Link } from "react-router-dom";
import { MailCheck } from "lucide-react";

export default function VerifyEmailPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg text-center">

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                    <MailCheck className="h-10 w-10 text-blue-600" />
                </div>

                <h1 className="mb-4 text-3xl font-bold">
                    Verify Your Email
                </h1>

                <p className="mb-6 text-slate-600">
                    Your NexaBank account has been created successfully.
                    We've sent a verification email to your inbox.
                </p>

                <p className="mb-8 text-sm text-slate-500">
                    Click the verification link in the email before signing in.
                </p>

                <Link
                    to="/login"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                    Go to Login
                </Link>

            </div>
        </div>
    );
}