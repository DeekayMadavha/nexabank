import Container from "../common/Container";

const stats = [
    {
        value: "500K+",
        label: "Active Customers",
    },
    {
        value: "R2.5B+",
        label: "Transactions Processed",
    },
    {
        value: "99.99%",
        label: "Platform Availability",
    },
    {
        value: "24/7",
        label: "Customer Support",
    },
];

export default function StatsSection() {
    return (
        <section className="border-y bg-white py-16">
            <Container>
                <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <h2 className="text-4xl font-bold text-blue-600">
                                {stat.value}
                            </h2>

                            <p className="mt-3 text-slate-600">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}