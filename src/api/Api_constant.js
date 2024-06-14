import axios from "axios"

export const getAllDataRequest = async (user_url) => {
    const responce = await axios({
        method: 'get',
        url: user_url,
    });
    return responce;
}

export const postAllDataRequest = async (user_url, data) => {
    const responce = await axios({
        method: 'post',
        url: user_url,
        data: data
    });
    return responce;
}
