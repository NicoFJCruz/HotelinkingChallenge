import React, { useEffect, useState } from "react";
import useCodePromotions from "@/Hooks/useCodePromotions";
import useCodeList from "@/Hooks/useCodeList";
import usePromotions from "@/Hooks/usePromotions";
import toast, { Toaster } from "react-hot-toast";

const CodePromotionsList = ({ user, className = "" }) => {
    const [codePromotions, setCodePromotions] = useState([]);
    const [promotions, setPromotions] = useState([]);
    const [refresh, setRefresh] = useState("");
    const notify = (info) => toast(info);

    const handleClick = async (id) => {
        try {
            const response = await useCodePromotions(id);
            setRefresh(Math.random());
            notify(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const code = await useCodeList(user.id);
            setCodePromotions(code);

            const promo = await usePromotions();
            setPromotions(promo);
        };

        fetchData();
    }, [user.id, refresh]);

    return (
        <div className={`w-full `}>
            <div>
                <h2 className="text-xl font-medium text-gray-900">
                    Códigos Promocionales
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    Aquí puedes canjear tus códigos generados.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-5 my-5 p-4 sm:p-8">
                {!codePromotions[0] ? (
                    <h1> No generaste códigos promocionales todavía. </h1>
                ) : (
                    codePromotions.map((code, i) => {
                        const promotion =
                            promotions.length > 0
                                ? promotions.find(
                                      (p) => p.id === code.promotion_id
                                  )
                                : null;

                        const active = codePromotions.find(
                            (e) => e.id === code.id
                        );

                        return (
                            <div
                                key={i}
                                className="flex  flex-col justify-between p-4 border border-gray-200 shadow-sm my-5 rounded-lg bg-[#a6acb4]"
                            >
                                <div className="flex flex-col items-center">
                                    <img
                                        src={promotion && promotion.image}
                                        alt="Promotion image"
                                        className="w-[15rem] rounded-[50%] m-6 "
                                    />

                                    <h2 className="text-xl font-medium text-gray-900 mb-4">
                                        <b> Titulo: </b>{" "}
                                        {promotion && promotion.title}
                                    </h2>

                                    <p className="mb-4">
                                        <b> Descripción: </b>
                                        {promotion &&
                                            promotion.description.slice(
                                                0,
                                                150
                                            ) + "..."}
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <p
                                        className={`break-words max-w-[75%] text-xl ${
                                            active.active
                                                ? "text-[#646e7b]"
                                                : ""
                                        }`}
                                    >
                                        {code.code}
                                    </p>
                                </div>

                                <div className="flex justify-center mt-auto">
                                    <button
                                        className={`inline-flex justify-center items-center text-white rounded-lg px-4 py-2 mt-3 font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105 ${
                                            active.active
                                                ? "text-[#e9eaec] bg-[#4d5969] hover:bg-[#213043]"
                                                : "bg-green-600 hover:bg-green-900"
                                        }`}
                                        onClick={() => handleClick(code.id)}
                                    >
                                        {active.active
                                            ? "Código utilizado"
                                            : "Canjear código"}
                                    </button>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
            <Toaster />
        </div>
    );
};

export default CodePromotionsList;
