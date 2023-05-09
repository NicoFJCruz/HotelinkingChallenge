import axios from "axios";
import React, { useEffect, useState } from "react";

const CodePromotionsList = ({ user }) => {
    const [codePromotions, setCodePromotions] = useState("");

    const handleClick = (id) => {
        axios
            .put(`/api/codepromotions/${id}`)
            .then((response) => {
                alert(response.data);
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
    }, [user.id]);

    return (
        <>
            <div>CodePromotionsList</div>
            {!codePromotions[0] ? (
                <h1> No generaste códigos promocionales todavía. </h1>
            ) : (
                codePromotions.map((code, i) => (
                    <div key={i}>
                        <div> {code.code} </div>
                        <button onClick={() => handleClick(code.id)}>
                            Canjear código
                        </button>
                    </div>
                ))
            )}
        </>
    );
};

export default CodePromotionsList;
