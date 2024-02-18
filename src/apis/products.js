import {request, form_request} from './request'

/// 새 상품 등록
export const ProductRegistrationApi = async (newProduct) => {
  try {
    const formData = new FormData();
    formData.append('productName', newProduct.productName);
    formData.append('productPrice', newProduct.productPrice);
    formData.append('productDesc', newProduct.productDesc);
    formData.append('image', newProduct.image);
    formData.append('companyId', newProduct.companyId);
    const res = await form_request.post('/product/new', formData)
    
    return res.data
  } catch (error) {
    console.log(error)
  }
}

/// 전체 상품 조회
export const GetAllProductsApi = async () => {
  try {
    const res = await request.get('/product')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// 상품 검색
export const ProductSearchApi = async (keyword) => {
  try {
    const res = await request.get(`/product/search?keyword=${keyword}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// Material Sourcing Detail
export const ProductDetailApi = async (id) => {
  try {
    const res = await request.get(`/product/detail/${id}`)
    return res
  } catch (error) {
    console.log(error)
  }
}
