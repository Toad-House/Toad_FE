import { useNavigate } from 'react-router-dom';

const ProductCard = ({ title, company, image, price }) => {
    const navigate = useNavigate();
    const handleCardClick = () =>{
        navigate('/product/detail');
    }
  return (
    <div className="border m-4 rounded-2xl overflow-hidden" onClick={handleCardClick}>
      <img src="https://nukak.kr/web/product/big/202312/75f08c112e031c2d5f199359a94065f9.png"  alt={title} className="w-full h-48 object-contain" />
      <div className="px-8 py-5">
        <div className="text-gray-500 text-sm font-light">{company}</div>
        <div className="font-bold text-lg">{title}</div>
        <div className="text-red-500 font-semibold text-xl text-right">{`$${price}`}</div>
      </div>
    </div>
  );
};

export default ProductCard;
