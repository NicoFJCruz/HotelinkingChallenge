import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import useCreateCode from "@/Hooks/useCreateCode";
import toast, { Toaster } from "react-hot-toast";
import useCodeList from "@/Hooks/useCodeList";

const Promotions = ({ auth }) => {
    const { promotions } = usePage().props;
    const [code, setCode] = useState([])
    const [refresh, setRefresh] = useState("")
    const notify = (info) => toast(info);

    const handleClick = async (promotion) => {
        const response = await useCreateCode(promotion, auth);
        setRefresh(Math.random())
        notify(response);
    };

    useEffect(()=>{
        const fetchData = async () => {
            const code = await useCodeList(auth.user.id);
            setCode(code);
        };

        fetchData();
    }, [refresh])

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Listado de promociones para generar códigos
                </h2>
            }
        >
            <div className="grid sm:grid-cols-2 gap-5 mx-4 grid-cols-1">
                {promotions.map((promotion) => {    
                    const color = code.find(e => e.promotion_id === promotion.id) 

                    return (
                        <div
                            key={promotion.id}
                            className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8"
                        >
                            <div className="p-6 text-gray-900 flex flex-col justify-between items-center bg-[#e9eaec] overflow-hidden shadow-sm sm:rounded-lg h-full">
                                <div className="flex flex-col justify-center items-center">
                                    <img
                                        src={promotion.image}
                                        alt="Promotion image"
                                        className="w-[25rem] rounded-[50%] m-6"
                                    />

                                    <h1 className="text-2xl mb-4">
                                        <b>{promotion.title}: </b>
                                    </h1>
                                    <p className="text-lg">{promotion.description}</p>
                                </div>
                                <div className="w-full flex justify-evenly align-center items-center mt-6">
                                    <div>
                                        <h2 className="text-xl font-bold"> {color ? "Código canjeado." : "Canjear Código:"} </h2>
                                    </div>
                                    <div>
                                        <button
                                            className="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"
                                            onClick={() =>
                                                handleClick(promotion.id)
                                            }
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-10 w-10"
                                                viewBox="0 0 20 20"
                                                fill={color ? "#a6acb4" : "#16a34a"}                
                                            >
                                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <Toaster />
        </AuthenticatedLayout>
    );
};

export default Promotions;
