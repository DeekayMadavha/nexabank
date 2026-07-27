export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} NexaBank. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:text-blue-600">
                            Privacy
                        </a>

                        <a href="#" className="hover:text-blue-600">
                            Terms
                        </a>

                        <a href="#" className="hover:text-blue-600">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}