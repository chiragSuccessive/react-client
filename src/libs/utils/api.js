
import axios from 'axios';

const callApi = async (email, password) => {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://express-training.herokuapp.com/api/user/login',
      data: {
        email,
        password,
      },
    });
    return response;
  } catch (error) {
    console.log('--------------------------------------error-------------------------', error);
    throw new Error(error);
  }
};
export default callApi;
