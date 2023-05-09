import axios from "axios";
import React, { useEffect, useState } from "react";

const CodePromotionsList = ({ user }) => {
    const [codePromotions, setCodePromotions] = useState([]);
    const [promotions, setPromotions] = useState([]);
    const [buttonText, setButtonText] = useState("Canjear código");

    const handleClick = (id) => {
        axios
            .put(`/api/codepromotions/${id}`)
            .then((response) => {
                alert(response.data);
                setButtonText("Código utilizado");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        axios
            .get(`/api/codepromotions/${user.id}`)
            .then((res) => setCodePromotions(res.data))
            .catch((error) => console.log(error));

        axios.get("/api/promotions").then((res) => setPromotions(res.data));
    }, [user.id, buttonText]);

    return (
        <>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Códigos Promocionales
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Aquí puedes canjear tus códigos generados.
                </p>
            </header>

            <div className="flex flex-wrap my-5">
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
                                className="p-4 border border-slate-500 my-5"
                            >
                                <div>
                                    <h2 className="text-lg font-medium text-gray-900">
                                        Titulo: {promotion && promotion.title}
                                    </h2>
                                    <p>Descripción: {promotion && promotion.description}</p>
                                </div>
                                <div>
                                    Código: {code.code.slice(0, 10) + "..."}
                                </div>
                                <button
                                    className="bg-slate-500 px-4 py-2 rounded-lg"
                                    onClick={() => handleClick(code.id)}
                                >
                                    {code.active
                                        ? "Código utilizado"
                                        : buttonText}
                                </button>
                            </div>
                        );
                    })
                )}
            </div>
        </>
    );
};

export default CodePromotionsList;
