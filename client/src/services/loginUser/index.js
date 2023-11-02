import axios from 'axios';
import { USER_ROUTES } from '../../../routes';

const loginUser = async (email, password) => {
    try {
        const response = await axios.post(USER_ROUTES.loginUser, {email, password})
        return response;
    }
    catch (error) {
        return error.response.data;
    }
}

export default loginUser