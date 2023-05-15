import axios from "axios";

const usePromotions = async (id) => {
    try {
        let response;
        await  axios.get("/api/promotions").then((res) => {
            response = res.data;
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export default usePromotions;
