import { useNavigate, useParams } from 'react-router-dom';
import { GetRequestDetailConsumerApi } from '../../apis/history';
import { useEffect, useState } from 'react';
import Map from './Map';
import styled from 'styled-components';

const MapContainer = styled.div`
  height: 200px; /* Adjust the height of the map container */
  width: 100%;
  margin-top: 20px; /* Add margin for spacing */
`;

const ConsumerHistoryDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetRequestDetailConsumerApi(id);
        console.log(res);
        setData(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="p-4 my-3">
      <button
        className="text-gray-700 font-normal text-base rounded-md mx-[33%] mb-[2%]"
        onClick={() => {
          navigate(-1);
        }}
      >
        {'X CLOSE'}
      </button>
      {data && (
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
          <div className="w-full h-52 object-cover">
            <img
              className="w-full h-full object-cover"
              src={data.requestImageUrl}
              alt={data.materialName}
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">{data.materialName}</h2>
            <p className="text-gray-600 mb-2">User Name: {data.userName}</p>
            <p className="text-gray-600 mb-2">User Contact: {data.userContact}</p>
            <p className="text-gray-600 mb-2">Collection Area: {data.collectionArea}</p>
            <p className="text-gray-600 mb-2">Available Area: {data.availableArea}</p>
          </div>
          <MapContainer>
            <Map />
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default ConsumerHistoryDetail;
