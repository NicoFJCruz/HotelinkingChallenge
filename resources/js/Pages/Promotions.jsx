import React from "react";
import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";

const Promotions = ({ auth }) => {
    const { promotions } = usePage().props;

    const handleClick = (promotion) => {
        axios
            .post("/api/promotions/" + promotion, {
                user_id: auth.user.id,
            })
            .then((response) => {
                alert(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Listado de promociones para generar códigos
                </h2>
            }
        >
            <div>
                {promotions.map((promotion) => (
                    <div key={promotion.id} className="py-4">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900 flex justify-between items-center">
                                    <div className="w-11/12 pr-4">
                                        <h1 className="text-xl">
                                            <b>{promotion.title}: </b>
                                        </h1>
                                        <p>{promotion.description}</p>
                                    </div>
                                    <div className="w-1/12 ">
                                        <button
                                            className="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"
                                            onClick={() =>
                                                handleClick(promotion.id)
                                            }
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                className="w-7 h-7 stroke-red-500"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
};

export default Promotions;
