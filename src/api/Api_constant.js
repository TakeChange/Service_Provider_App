import axios from "axios"

export const getAllDataRequest = async (user_url) => {
  const response = await axios({
    method: 'get',
    url: user_url,
  });
  return response;
}

export const postAllDataRequest = async (URL, param) => {
  try {
    const response = await axios.post(URL, param,
      {
        headers: {
          "Content-Type": "multipart/form-data",

        },
      }
    );
    const { status, message } = response.data;
    console.log('res const', response);
    return response;
  } catch (error) {
    console.log('error', error)
    ToastAndroid.show('Please enter valid username and password', ToastAndroid.SHORT);
  }
};