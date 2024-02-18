
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {MaterialRegistrationApi} from "../../apis/materials";

export default function MaterialRequest() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();
  const [condition, setCondition] = useState();
  const [pointsPerWeight,setPointsPerWeight] = useState();
  const [restrictedArea, setRestrictedArea] = useState();
  const [availableArea, setAvailableArea] = useState();
  const [image, setImage] = useState();

  const handleSubmit = async (e) => {
    const newProduct = {
      companyId: 1,
      materialName: name,
      minimumQuantity: parseInt(quantity),
      expectedCondition: condition,
      productId: 1,
      pointsPerWeight: parseInt(pointsPerWeight),
      restrictedArea,
      availableArea,
      multipartFile: image,
    }

    const res = await MaterialRegistrationApi(newProduct);
    console.log("request\n", newProduct)
    
    console.log(res)

    
  }

  return (
    <div>
      <div className="max-w-screen p-6 mt-5 mx-[20%]  bg-white rounded-md">
      <div>
          <button
            onClick={() => navigate(-1)}
            className=" text-gray-800 my-3 text-md font-semibold p-2 rounded-md mr-4"
          >
            {'< BACK'}
          </button>
          <h1 className="text-3xl font-semibold mb-6 ">Write Material Request</h1>
        </div>
        <div className="border-gray-100 border shadow-md p-10 rounded-lg">
          <div className="mb-4 flex">
              <label className="block text-gray-700 mb-2 w-52">
                Material Name
              </label>
              <input
                className="w-full p-2 border rounded-md bg-gray-200"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4 flex">
              <label className="block text-gray-700 mb-2 w-52">
                Minimum Quantity(g)
              </label>
              <input
                className="w-full p-2 border rounded-md bg-gray-200"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              
            </div>
            <div className="mb-4 flex">
              <label className="block text-gray-700 mb-2 w-52">
                Expected Condition
              </label>
              <input
                className="w-full p-2 border rounded-md bg-gray-200"
                type="text"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              />
            </div>
            <div className="mb-4 flex">
              <label className="block text-gray-700 mb-2 w-52">
                Points Per 100g
              </label>
              <input
                className="w-full p-2 border rounded-md bg-gray-200"
                type="number"
                value={pointsPerWeight}
                onChange={(e) => setPointsPerWeight(e.target.value)}
              />
            </div>
            <div className="mb-10 flex">
              <label className="block text-gray-700 mb-2 w-52">Image</label>
              <input
                className="w-full p-2 border rounded-md bg-gray-200"
                type="file"
                accept="image/*"
                onChange={e => setImage(e.target.files[0])}
              />
            </div>
            <hr />


            <div className="mb-4 flex mt-10">
              <label className="block text-gray-700 mb-2 w-52">
                Restricted Area
              </label>
              <input
                className="w-full p-2 border rounded-md bg-gray-200"
                type="text"
                value={restrictedArea}
                onChange={(e) => setRestrictedArea(e.target.value)}
              />
            </div>
            <div className="mb-4 flex">
              <label className="block text-gray-700 mb-2 w-52">
                Available Area
              </label>
              <input
                className="w-full p-2 border rounded-md bg-gray-200"
                type="text"
                value={availableArea}
                onChange={(e) => setAvailableArea(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white p-3 rounded-md mt-5"
              type="button"
              onClick={handleSubmit}
            >
              Write Request
            </button>

        </div>
      </div>
    </div>
  )
}
