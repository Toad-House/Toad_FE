import axios from 'axios';
const SERVER_URL = "";

const request = axios.create({
    baseURL: `${SERVER_URL}`,
    headers : {
        'Content-Type': 'application/json',
    },
});


export default request;

export const postRidingRecordApi = async ({
    ridingTime,
    distance,
    maxSpeed,
    ridingDuration,
    userList,
  }: RidingRecordType) => {
    try {
      const response = await request.post(
        "/riding_record/post",
        JSON.stringify({
          bicycleId: useMainBike.getState().main,
          ridingTime: Number(ridingTime),
          distance: distance,
          avgSpeed: distance / (Number(ridingDuration) / (1000 * 60 * 60)),
          maxSpeed: maxSpeed,
          ridingDuration: Number(ridingDuration),
          userList: userList,
        })
      );
  
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  };
  