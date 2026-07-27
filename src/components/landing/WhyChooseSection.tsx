import {
    ShieldCheck,
    BadgeDollarSign,
    Smartphone,
} from "lucide-react";

import Container from "../common/Container";

const benefits = [
    {
        title: "Bank-Grade Security",
        description:
            "Your data and money are protected with industry-standard encryption, secure authentication, and fraud monitoring.",
        icon: ShieldCheck,
    },
    {
        title: "Low Banking Fees",
        description:
            "Transparent pricing with fewer hidden fees, helping you save more every month.",
        icon: BadgeDollarSign,
    },
    {
        title: "Bank Anywhere",
        description:
            "Access your accounts, make payments, and manage your finances from any device, anytime.",
        icon: Smartphone,
    },
];

export default function WhyChooseSection() {
    return (
        <section className="bg-white py-24">
            <Container>

                <div className="mb-16 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Choose NexaBank
          </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900">
                        Banking Built Around You
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
                        Whether you're saving, spending, investing, or sending money,
                        NexaBank provides the tools you need with security and simplicity.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-3">

                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;

                        return (
                            <div
                                key={benefit.title}
                                className="rounded-3xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                                    <Icon className="text-blue-600" size={30} />
                                </div>

                                <h3 className="text-2xl font-semibold">
                                    {benefit.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    {benefit.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </Container>
        </section>
    );
}