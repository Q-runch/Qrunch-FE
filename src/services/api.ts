import axios from "axios";

export const getAuthToken = () => {
  const token = "abc";
  return token;
};

export const postSignUpDatas = async (data: any) => {
  console.log(data);
  try {
    const response = await axios.post("/login/singUp", {
      address: data.address,
    });
    const responseData = await response.data;
    return responseData;
  } catch (error) {
    console.error(error);
  }
};
