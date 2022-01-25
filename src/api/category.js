import axios from 'axios';

// Get all Categories
export const getAllCategories = async () => {
    try{
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/category`)
        return data
    }catch(error){
        throw Error(error.message)
    }
}


// Create a new category
export const createCategory = async (formData) => {
    try{
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/category/create`, formData);
        return data;
    }catch(error){
        throw Error(error.message);
    }
}


// Delete a category
export const deleteCategory = async (catId) => {
    try{
        const {data} = await axios.delete(`${process.env.REACT_APP_API_URL}/category/delete/${catId}`);
        return data;
    }catch (error) {
        throw Error(error.message);
    }
}


// Update a category
export const updateCategory = async ({categorySlug, name}) => {
    try{
        const {data} = await axios.patch(`${process.env.REACT_APP_API_URL}/category/update/${categorySlug}`, {
            name: name
        });
        return data;
    }catch (error) {
        throw Error(error.message);
    }
}