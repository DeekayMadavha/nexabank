import Container from "../common/Container";
import DashboardPreview from "./DashboardPreview";

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 lg:py-32">
            <Container>
                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left Side */}
                    <div>

            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🇿🇦 South Africa's Next Digital Bank
            </span>

                        <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-7xl">
                            Banking
                            <br />
                            Built for
                            <span className="text-blue-600"> Tomorrow.</span>
                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                            Manage your money with confidence. Open accounts, transfer
                            funds instantly, monitor your spending, and grow your savings
                            using a secure digital banking platform designed for modern
                            South Africans.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700 hover:shadow-xl">
                                Open an Account
                            </button>

                            <button className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition duration-300 hover:bg-slate-100">
                                Learn More
                            </button>

                        </div>

                        {/* Quick Stats */}

                        <div className="mt-14 grid grid-cols-3 gap-8">

                            <div>
                                <h3 className="text-3xl font-bold text-slate-900">
                                    500K+
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    Customers
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-slate-900">
                                    R2.5B+
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    Transactions
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-slate-900">
                                    99.99%
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    Uptime
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div className="flex justify-center lg:justify-end">
                        <DashboardPreview />
                    </div>

                </div>
            </Container>
        </section>
    );
}