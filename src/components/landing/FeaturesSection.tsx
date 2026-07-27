import {
    CreditCard,
    ShieldCheck,
    Wallet,
    ArrowRightLeft,
    PiggyBank,
    Smartphone,
} from "lucide-react";

import Container from "../common/Container";

const features = [
    {
        title: "Instant Transfers",
        description:
            "Send and receive money instantly between NexaBank accounts.",
        icon: ArrowRightLeft,
    },
    {
        title: "Virtual Cards",
        description:
            "Create secure virtual cards for safer online shopping.",
        icon: CreditCard,
    },
    {
        title: "Savings Goals",
        description:
            "Set goals and automatically grow your savings.",
        icon: PiggyBank,
    },
    {
        title: "Smart Wallet",
        description:
            "Track spending with real-time insights and budgeting.",
        icon: Wallet,
    },
    {
        title: "Advanced Security",
        description:
            "Biometric login, encryption and fraud protection.",
        icon: ShieldCheck,
    },
    {
        title: "Mobile Banking",
        description:
            "Manage your finances from anywhere, anytime.",
        icon: Smartphone,
    },
];

export default function FeaturesSection() {
    return (
        <section className="bg-slate-50 py-24">
            <Container>

                <div className="mb-16 text-center">

                    <h2 className="text-4xl font-bold">
                        Everything You Need
                    </h2>

                    <p className="mt-4 text-lg text-slate-600">
                        Powerful banking features designed around your daily life.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                                    <Icon className="text-blue-600" size={28} />
                                </div>

                                <h3 className="text-xl font-semibold">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </Container>
        </section>
    );
}