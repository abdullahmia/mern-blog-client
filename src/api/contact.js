import axios from 'axios';


export const sendMessage = async (formData) => {
    try{
        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/contact/add`, formData)
        return data;
    }catch (error) {
        throw Error(error.message);
    }
}


// subsceibe add
export const addSubscribe = async (formData) => {
    try{
        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/contact/subscribe/add`, formData)
        return data;
    }catch (error) {
        throw Error(error.message);
    }
}