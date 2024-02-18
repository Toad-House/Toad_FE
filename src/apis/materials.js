import {request, form_request} from './request'

// Material sourcing 등록
export const MaterialRegistrationApi = async (newProduct) => {
  try {
    const formData = new FormData();
    formData.append('companyId', 1);
    formData.append('materialName', newProduct.materialName);
    formData.append('minimumQuantity', newProduct.minimumQuantity);
    formData.append('expectedCondition', newProduct.expectedCondition);
    formData.append('productId', 1);
    formData.append('pointsPerWeight', newProduct.pointsPerWeight);
    formData.append('restrictedArea', newProduct.restrictedArea);
    formData.append('availableArea', newProduct.availableArea);
    formData.append('multipartFile', newProduct.multipartFile);
    const res = await form_request.post('/material', formData)
    console.log(res)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// Buyer -> Seller 재료 제공 요청
export const SourcingRequestApi = async ({ params }) => {
  try {
    const res = await request.post('/material/request', JSON.stringify(params))
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// Material Sourcing 검색 api
export const MaterialSearchApi = async (keyword) => {
  try {
    const res = request.get(`/material/search?keyword=${keyword}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// Material Sourcing Detail
export const MaterialDetailApi = async (id) => {
  try {
    const res = await request.get(`/material/detail/${id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// Material Sourcing 전체 조회
export const GetAllMaterialsApi = async () => {
  try {
    const res = await request.get('/material/all')
    return res.data
  } catch (error) {
    console.log(error)
  }
}
