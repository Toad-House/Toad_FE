import request from "./request";

export const ProductRegistrationApi = async ({params}) => {
    try {
        const res = await request.post(
            "/products/new",
            JSON.stringify(params)
        );
        return res.data;
    }catch(error){
        console.log(error);
    }
}

