import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white">
            <Container>

                <div className="grid gap-12 py-16 md:grid-cols-4">

                    <div>

                        <Logo />

                        <p className="mt-6 text-sm leading-7 text-slate-400">
                            Secure, modern banking built for the future of South Africa.
                        </p>

                    </div>

                    <div>

                        <h3 className="mb-5 font-semibold">
                            Company
                        </h3>

                        <ul className="space-y-3 text-slate-400">

                            <li>About</li>

                            <li>Careers</li>

                            <li>Security</li>

                            <li>Contact</li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="mb-5 font-semibold">
                            Banking
                        </h3>

                        <ul className="space-y-3 text-slate-400">

                            <li>Accounts</li>

                            <li>Cards</li>

                            <li>Loans</li>

                            <li>Investments</li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="mb-5 font-semibold">
                            Legal
                        </h3>

                        <ul className="space-y-3 text-slate-400">

                            <li>Privacy Policy</li>

                            <li>Terms of Service</li>

                            <li>POPIA Compliance</li>

                        </ul>

                    </div>

                </div>

                <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">

                    © 2026 NexaBank. All rights reserved.

                </div>

            </Container>
        </footer>
    );
}