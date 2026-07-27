import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";

const navItems = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Features",
        path: "/features",
    },
    {
        label: "Security",
        path: "/security",
    },
    {
        label: "Contact",
        path: "/contact",
    },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <Container className="flex h-20 items-center justify-between">

                <Logo />

                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors ${
                                    isActive
                                        ? "text-blue-600"
                                        : "text-slate-600 hover:text-blue-600"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-4">

                    <Link
                        to="/login"
                        className="font-medium text-slate-700 hover:text-blue-600"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Open Account
                    </Link>

                </div>

            </Container>
        </header>
    );
}