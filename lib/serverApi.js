import axios from "axios";

async function createServer(data)
{
    try
    {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/server/new`, data);
        return response;
    }
    catch(error)
    {
        console.log(error);
    }
}

async function getAllServers(pets, setPets)
{
    const url = `${ import.meta.env.VITE_BACKEND_URL }/server`;
    const response = await axios.get(url);
    return response;
}

async function getServer(id)
{
    try
    {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/server/${id}`);
        return response.data;
    }
    catch(error)
    {
        console.log(error);
    }
}

async function updateServer(id, data)
{
    try
    {
        const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/server/${id}`, data);
        return response;
    }
    catch(error)
    {
        console.log(error);
    }
}

async function deleteServer(id)
{
    try
    {
        const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/server/${id}`);
        return response;
    }
    catch(error)
    {
        console.log(error);
    }
}


export
{
    createServer,
    getAllServers,
    getServer,
    updateServer,
    deleteServer
}