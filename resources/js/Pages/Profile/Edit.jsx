import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import { Head } from "@inertiajs/react";
import CodePromotionsList from "./Partials/CodePromotionsList";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Perfil
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-12 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 ">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg bg-[#e9eaec]">
                        <CodePromotionsList
                            user={auth.user}
                            className="w-full"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg bg-[#e9eaec]">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
