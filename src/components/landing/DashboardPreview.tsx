import {
    ArrowDownLeft,
    ArrowUpRight,
    CreditCard,
    Wallet,
} from "lucide-react";

import SpendingChart from "./SpendingChart";
export default function DashboardPreview() {
    return (
        <div className="relative">

            {/* Main Card */}

            <div className="mt-10">

                <SpendingChart />
            </div>

            <div className="mt-10 rounded-2xl bg-slate-50 p-5">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="font-semibold">
                            Savings Goal
                        </p>

                        <p className="text-sm text-slate-500">
                            Emergency Fund
                        </p>

                    </div>

                    <span className="font-bold text-blue-600">
      72%
    </span>

                </div>

                <div className="mt-4 h-3 rounded-full bg-slate-200">

                    <div className="h-3 w-[72%] rounded-full bg-blue-600"></div>

                </div>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-sm text-slate-500">
                            Available Balance
                        </p>

                        <h2 className="mt-2 text-4xl font-bold">
                            R24 560.80
                        </h2>

                    </div>

                    <div className="rounded-2xl bg-blue-100 p-4">
                        <Wallet className="text-blue-600" size={28} />
                    </div>

                </div>

                <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 p-6 text-white">

                    <div className="flex justify-between">

                        <CreditCard />

                        <span>Debit Card</span>

                    </div>

                    <div className="mt-10 text-xl tracking-[0.25em]">
                        **** **** **** 2408
                    </div>

                    <div className="mt-8 flex justify-between text-sm">

                        <span>John Smith</span>

                        <span>12/30</span>

                    </div>

                </div>

                <div className="mt-10">

                    <h3 className="mb-6 text-lg font-semibold">
                        Recent Transactions
                    </h3>

                    <div className="space-y-5">

                        <Transaction
                            title="Salary"
                            date="Today"
                            amount="+R18 000"
                            income
                        />

                        <Transaction
                            title="Checkers"
                            date="Groceries"
                            amount="-R856"
                        />

                        <Transaction
                            title="Netflix"
                            date="Subscription"
                            amount="-R199"
                        />

                        <Transaction
                            title="Fuel"
                            date="Shell Garage"
                            amount="-R750"
                        />

                    </div>

                </div>

            </div>

        </div>
    );
}

interface TransactionProps {
    title: string;
    date: string;
    amount: string;
    income?: boolean;
}

function Transaction({
                         title,
                         date,
                         amount,
                         income = false,
                     }: TransactionProps) {
    return (
        <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

                <div
                    className={`rounded-xl p-3 ${
                        income
                            ? "bg-green-100"
                            : "bg-red-100"
                    }`}
                >
                    {income ? (
                        <ArrowDownLeft
                            className="text-green-600"
                            size={20}
                        />
                    ) : (
                        <ArrowUpRight
                            className="text-red-600"
                            size={20}
                        />
                    )}
                </div>

                <div>

                    <p className="font-semibold">
                        {title}
                    </p>

                    <p className="text-sm text-slate-500">
                        {date}
                    </p>

                </div>

            </div>

            <span
                className={`font-semibold ${
                    income
                        ? "text-green-600"
                        : "text-red-600"
                }`}
            >
        {amount}
      </span>

        </div>
    );
}