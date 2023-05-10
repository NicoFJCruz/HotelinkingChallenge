import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <img
                        src="https://openailabsprodscus.blob.core.windows.net/private/user-tofWCcltc1lZSxREw4CwvrrA/generations/generation-QuDvIK0WgvT0s9uSWCgO6GAt/image.webp?st=2023-05-10T13%3A58%3A04Z&se=2023-05-10T15%3A56%3A04Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-05-10T13%3A15%3A09Z&ske=2023-05-17T13%3A15%3A09Z&sks=b&skv=2021-08-06&sig=rygIRasBnMl0HtNr%2BkFUfLChBVA5J%2BitqHPWZ9bxhkU%3D"
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
