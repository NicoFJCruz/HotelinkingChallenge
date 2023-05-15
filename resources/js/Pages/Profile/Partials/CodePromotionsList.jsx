import React, { useEffect, useState } from "react";
import useCodePromotions from "@/Hooks/useCodePromotions";
import useCodeList from "@/Hooks/useCodeList";
import usePromotions from "@/Hooks/usePromotions";
import toast, { Toaster } from "react-hot-toast";

const CodePromotionsList = ({ user, className = "" }) => {
    const [codePromotions, setCodePromotions] = useState([]);
    const [promotions, setPromotions] = useState([]);
    const [buttonTexts, setButtonTexts] = useState({});
    const notify = (info) => toast(info);

    const handleClick = async (id) => {
        try {
            const response = await useCodePromotions(id);
            notify(response);
            setButtonTexts({ ...buttonTexts, [id]: "Código utilizado" });
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
    }, [user.id]);

    return (
        <div className={`w-full`}>
            <div>
                <h2 className="text-lg font-medium text-gray-900">
                    Códigos Promocionales
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    Aquí puedes canjear tus códigos generados.
                </p>
            </div>

            <div className="flex flex-wrap my-5 p-4 sm:p-8">
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
                        return (
                            <div
                                key={i}
                                className="p-4 border border-gray-200 bg-white shadow-sm my-5 rounded-lg "
                            >
                                <div>
                                    <h2 className="text-lg font-medium text-gray-900">
                                        Titulo: {promotion && promotion.title}
                                    </h2>
                                    <p>
                                        Descripción:{" "}
                                        {promotion && promotion.description}
                                    </p>
                                </div>
                                <div>
                                    Código: {code.code.slice(0, 10) + "..."}
                                </div>
                                <button
                                    className={`bg-gray-800 hover:bg-gray-700 bg-gray-800 hover:bg-gray-700 inline-flex justify-center items-center text-white rounded-lg px-4 py-2 mt-3 font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105`}
                                    onClick={() => handleClick(code.id)}
                                >
                                    {code.active
                                        ? buttonTexts[code.id] ||
                                          "Código utilizado"
                                        : buttonTexts[code.id] ||
                                          "Canjear código"}
                                </button>
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
