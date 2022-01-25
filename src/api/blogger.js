import axios from "axios";


export const addBlogger = async (bloggerData) => {
    try{
        console.log(bloggerData);
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/blogger/create`, bloggerData);
        return data;
    }catch(error) {
        throw Error(error.message);
    }
}

export const getBloggers = async () => {
    try{
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/blogger`);
        return data;
    }catch(error) {
        throw Error(error.message);
    }
}