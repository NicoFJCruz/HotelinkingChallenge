import axios from "axios";

const useCreateCode = async (promotion, auth) => {
    try {
        let response;
        await axios
            .post(`/api/promotions/${promotion}`, {
                user_id: auth.user.id,
            })
            .then((res) => {
                response = res.data;
            });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export default useCreateCode;
