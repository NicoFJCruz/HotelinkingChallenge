import axios from "axios";

const useCodeList = async (id) => {
    try {
        let response;
        await axios.get(`/api/codepromotions/${id}`).then((res) => {
            response = res.data;
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export default useCodeList;
