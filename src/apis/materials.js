import request from './request'

// Material sourcing 등록
export const MaterialRegistrationApi = async ({ params }) => {
  try {
    const res = await request.post('/material', JSON.stringify(params))
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
