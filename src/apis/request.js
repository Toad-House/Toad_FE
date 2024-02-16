import axios from 'axios';
const SERVER_URL = "";

const request = axios.create({
    baseURL: `${SERVER_URL}`,
    headers : {
        'Content-Type': 'application/json',
    },
});


export default request;

// export const GetBicycleListApi = async () => {
//   try {
//     const response = await request.get('/management_record/get_bicycle_list');
//     return response.data;
//   } catch (error) {
//     return handleApiError(error);
//   }
// };
