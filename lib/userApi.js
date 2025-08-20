import axios from "axios";

async function createUser(data)
{
    try
    {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/new`, data);
        return response;
    }
    catch(error)
    {
        console.log(error);
    }
}

async function getAllUsers()
{
    const url = `${ import.meta.env.VITE_BACKEND_URL }/user`;
    const response = await axios.get(url);
    return response;
}

async function getUser(id)
{
    try
    {
        const token = localStorage.getItem("token")
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/${id}`, { headers: { Authorization: `Bearer ${ token }` } });
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}

async function updateUser(id, data)
{
    try
    {
        const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/user/${id}`, data);
        return response;
    }
    catch(error)
    {
        console.log(error);
    }
}



export
{
    createUser,
    getAllUsers,
    getUser,
    updateUser
}