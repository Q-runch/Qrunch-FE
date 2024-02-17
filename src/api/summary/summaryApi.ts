import { axiosInstance } from "@/axiosInstance/index"

export const getSummary = async(id:string)=>{
    try{
        const response = await axiosInstance.get(`summary/${id}`);
        return response.data.data.summary;
    }catch(error){
        console.error(error);
        return null;
    }
}