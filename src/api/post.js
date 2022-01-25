import axios from 'axios';


// Get all Post
export const getAllPost = async () => {
    try{
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/post`)
        return data;
    }catch(error){
        throw Error(error.message)
    }
}

// get all category post
export const getCategoryAllPost = async (category) => {
    try{
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/post?category=${category}`);
        return data;
    }catch(error){
        throw Error(error.message)
    }
}


// letest post
export const letestPost = async () => {
     try{
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/post/letest`)
        return data;
    }catch(error){
        throw Error(error.message)
    }
}


// Get a single post
export const singlePost = async (postSlug) => {
    try{
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/post/${postSlug}`);
        return data;
    }catch(error){
        throw Error(error.message);
    }
}


// create a new post
export const createPost = async (formData) => {
    try{
        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/post/create`, formData, {
            headers: {
                'content-type': 'multipart/form-data' // do not forget this 
            }
        });
        return data;
    }catch(error){
        throw Error(error.message);
    }
}

// Delete a post
export const deletePost = async (postId) => {
    try{
        const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/post/delete/${postId}`);
        return data;
    }catch (error) {
        throw Error(error.message);
    }
}


// make Remove featred
export const makeRemoveFeatured = async (postData) => {
    try{
        const { data } = await axios.patch(`${process.env.REACT_APP_API_URL}/post/do/${postData.slug}?type=${postData.type}`);
        return data;
    }catch (error) {
        throw Error(error.message);
    }
}


// Update a post
export const updatePost = async ({slug, formData}) => {
    try{
        const { data } = await axios.patch(`${process.env.REACT_APP_API_URL}/post/update/${slug}`, formData);
        return data;
    }catch (error) {
        throw Error(error.message);
    }
}