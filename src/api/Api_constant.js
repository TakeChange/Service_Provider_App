import axios from "axios"

export const getAllDataRequest = async (user_url) => {
  const response = await axios({
    method: 'get',
    url: user_url,
  });
  return response;
}

export const postAllDataRequest = async (VALIDATE_MOBILE_NUMBER, param) => {
  try {
    const response = await axios.post(VALIDATE_MOBILE_NUMBER, param,
      {
        headers: {
          "Content-Type": "multipart/form-data",

        },
      }
    );
    const { status, message } = response.data;
    console.log('res', response);
    return response;
  } catch (error) {
    console.log('error', error)
    ToastAndroid.show('Please enter valid username and password', ToastAndroid.SHORT);
  }
};