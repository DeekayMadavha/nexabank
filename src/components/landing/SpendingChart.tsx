import {
    ResponsiveContainer,
    AreaChart,
    Area,
    CartesianGrid,
    Tooltip,
    XAxis,
} from "recharts";

const data = [
    { month: "Jan", spending: 7200 },
    { month: "Feb", spending: 6100 },
    { month: "Mar", spending: 8400 },
    { month: "Apr", spending: 6800 },
    { month: "May", spending: 9300 },
    { month: "Jun", spending: 7600 },
];

export default function SpendingChart() {
    return (
        <div className="mt-8">

            <div className="mb-4">
                <h3 className="text-lg font-semibold">
                    Monthly Spending
                </h3>

                <p className="text-sm text-slate-500">
                    Last 6 months
                </p>
            </div>

            <div className="h-56">

                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>

                        <defs>

                            <linearGradient
                                id="spending"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                            </linearGradient>

                        </defs>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                        />

                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="spending"
                            stroke="#2563EB"
                            strokeWidth={3}
                            fill="url(#spending)"
                        />

                    </AreaChart>
                </ResponsiveContainer>

            </div>

        </div>
    );
}