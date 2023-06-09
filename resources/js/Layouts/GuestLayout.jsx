import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-r from-[#9098a1] to-[#eddeee]">
            <div>
                <Link href="/">
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="w-20 h-20 fill-current text-gray-800 rounded-xl"
                    />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
