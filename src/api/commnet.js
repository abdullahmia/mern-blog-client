import axios from 'axios';


// Add new comment
export const addComment = async (commentData) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/comment/add`, commentData);
        return data;
    }catch(error) {
        throw Error(error.message);
    }
}


// Get all of comments
export const allComments = async () => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/comment`);
        return data;
    }catch(error) {
        throw Error(error.message);
    }
}


// Delete a comment
export const deleteComment = async (commentId) => {
    try {
        const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/comment/${commentId}`);
        return data;
    }catch(error) {
        throw Error(error.message);
    }
}