import { request } from './request'

export const UserPointHistoryApi = async ({ params }) => {
  try {
    const res = await request.get('/point/user', { params })
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const CompanyPointHistoryApi = async ({ params }) => {
  try {
    const res = await request.get('/point/company', { params })
    return res.data
  } catch (error) {
    console.log(error)
  }
}
