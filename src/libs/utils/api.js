
import axios from 'axios';

const callApi = async (method, data, url, header) => {
  try {
    console.log('---------here 6');

    const response = await axios({
      method,
      baseURL: 'https://express-training.herokuapp.com/api',
      url,
      data,
      headers: {
        authorization: header,
      },
    });
    return response;
  } catch (error) {
    console.log('here--------------16', error);

    return error;
  }
};
export default callApi;
