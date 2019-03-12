
import axios from 'axios';

const callApi = async (method, data, url, header, params) => {
  try {
    const response = await axios({
      method,
      baseURL: 'https://express-training.herokuapp.com/api',
      url,
      data,
      headers: {
        authorization: header,
      },
      params,
    });
    return response;
  } catch (error) {
    return error;
  }
};
export default callApi;
