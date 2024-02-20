import request from './request'

// 회사 재료 제공 요청 보기
export const GetAllRequestCompanyApi = async (id) => {
    try {
        const res = await request.get(`/company/request?companyId=${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

// 회사 재료 제공 요청 상세 보기
export const GetRequestDetailCompanyApi = async (id) => {
    try {
        const res = await request.get(`/company/request/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }

}

// 회사 재료 제공 요청 상태 변경
export const ChangeRequestStateCompanyApi = async ({ params }) => {
    try {
        console.log("params", params)
        const res = await request.post('/company/request', JSON.stringify(params))
        return res.data
    } catch (error) {
        console.log(error)
    }
}

// 회사 재료 제공 요청 정보 변경
export const UpdateRequestCompanyApi = async ({ params }) => {
    try {
        const res = await request.patch('/company/request', JSON.stringify(params))
        return res.data
    } catch (error) {
        console.log(error)
    }
}

// 유저 재료 제공 요청 보기
export const GetAllRequestConsumerApi = async (id) => {
    try {
        const res = await request.get(`/consumer/request?userId=${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

// 유저 재료 제공 요청 상세 보기
export const GetRequestDetailConsumerApi = async (id) => {
    try {
        const res = await request.get(`/consumer/request/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

// 유저 재료 제공 요청 정보 변경
export const UpdateRequestConsumerApi = async ({ params }) => {
    try {
        const res = await request.patch('/consumer/request', JSON.stringify(params))
        return res.data
    } catch (error) {
        console.log(error)
    }
}

// 유저 재료 제공 취소
export const CancelRequestConsumerApi = async ({ params }) => {
    try {
        const res = await request.post('/consumer/request', JSON.stringify(params))
        return res.data
    } catch (error) {
        console.log(error)
    }
}