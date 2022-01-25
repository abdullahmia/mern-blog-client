import axios from 'axios';


export const signup = async (formData) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, formData)
        return data;
    }catch (error) {
        throw Error("Ubale to fetch data. Reload one time");
    }    
}

export const login = async (formData) => {
    try{
        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/auth`, formData)
        return data;
    }catch (error) {
        console.log(error);
        // throw Error(error.message);
    }
}


// Get all users
export const getAllUsers = async (req, res) => {
    try{
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users`);
        return data;
    } catch(error) {
        throw Error(error.message);
    }
}


// Make Admin
export const makeAdmin = async (userId) => {
    try {
        const { data } = await axios.patch(`${process.env.REACT_APP_API_URL}/auth/make-admin/${userId}`);
        return data;
    }catch(error) {
        throw Error(error.message);
    }
}


// Make Blogger
export const makeBlogger = async (userId) => {
    try {
        const { data } = await axios.patch(`${process.env.REACT_APP_API_URL}/auth/make-blogger/${userId}`);
        return data;
    }catch(error) {
        throw Error(error.message);
    }
}