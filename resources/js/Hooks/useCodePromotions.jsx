import axios from "axios";

const useCodePromotions = async (id) => {
    try {
        let response;
        await axios.put(`/api/codepromotions/${id}`).then((res) => {
            response = res.data;
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export default useCodePromotions;
