import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/admin';

const api = axios.create({
    baseURL: API_URL,
});
export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/login',credentials); 
            return response.data;
    } catch (error) {
        console.error('Error logging in',error);
        throw error;
    }
};
export const registerUser = async (credentials) => {
    try {
        const response = await api.post('/register',credentials);
        return response.data;
    } catch (error) {
        console.error('There was a problem registering this user',error);
        throw error;
    }
}

export default api; 