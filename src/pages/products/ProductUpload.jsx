import { useNavigate } from "react-router-dom";
import {ProductRegistrationApi} from "../../apis/products";
import React from "react";


const encodeFileToBase64 = (image) => {
  return new Promise(async (resolve, reject) => {
    const reader = new FileReader();
    if (image) {
      reader.readAsDataURL(image);
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
    }
  });
};

const ProductUpload = () => {


  const onImageChange = async (e) => {
    const selectedImage = e.target.files && e.target.files[0];
    if(selectedImage){
      const base64image = (await encodeFileToBase64(selectedImage));
      setImage(base64image);
    }
  }
  const navigate = useNavigate();

  // 입력 값 상태 관리
  const [productName, setProductName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState(null);

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      productName: productName,
      productPrice: parseInt(price),
      productDesc: description,
      imageUrls: image,
      companyId: 1,
    };

    const res = await ProductRegistrationApi(newProduct);
    console.log(res);

    setProductName('');
    setPrice('');
    setDescription('');
    setImage(null);
    
  };

  return (
  <div>
    
    <div className="max-w-screen p-6 mt-16 mx-[20%] bg-white rounded-md">
      <div>
       <button onClick={() => navigate(-1)} className=" text-gray-800 my-3 text-md font-semibold p-2 rounded-md mr-4">
          {"< BACK"}
      </button>
      <h1 className="text-3xl font-semibold mb-10 ">ADD NEW PRODUCT</h1>
      </div>
      <div className='border-gray-400 shadow-md p-10 rounded-lg'>
      <p className='mb-7 text-gray-400'>product information</p>
      
      <form>
        <div className="mb-4 flex">
          <label className="block text-gray-700 mb-2 w-44">Product Name</label>
          <input
            className="w-full p-2 border rounded-md bg-gray-200"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="mb-4 flex">
          <label className="block text-gray-700 mb-2 w-44">Price</label>
          <input
            className="w-full p-2 border rounded-md bg-gray-200"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4 flex">
          <label className="block text-gray-700 mb-2 w-44">Description</label>
          <textarea
            className="w-full p-2 border rounded-md bg-gray-200 h-44"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4 flex">
          <label className="block text-gray-700 mb-2 w-44">Image</label>
          <input
            className="w-full p-2 border rounded-md bg-gray-200"
            type="file"
            accept="image/*"
            onChange={onImageChange}
          />
        </div>
        <button className="w-full bg-blue-500 text-white p-3 rounded-md mt-10" type="submit" onClick={handleSubmit}>
          Add Product
        </button>
      </form></div>
    </div></div>
  );
};

export default ProductUpload;
