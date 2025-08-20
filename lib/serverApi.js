import axios from "axios";
import { jwtDecode } from "jwt-decode";

async function createServer(data)
{
    try
    {
        const token = localStorage.getItem("token")
        const userId = jwtDecode(token);

        console.log(userId.id);

        console.log(data);

        const users =
            [{
                user: userId.id,
                role: "Owner"
            }];

        let server = { ...data, users };

        console.log(server);


        const response = await axios.post(`${ import.meta.env.VITE_BACKEND_URL }/server/new`, server, { headers: { Authorization: `Bearer ${ token }` } });

        return response;
    }
    catch (error)
    {
        console.log(error);
    }
}

async function getAllServers()
{
    const token = localStorage.getItem("token")
    const url = `${ import.meta.env.VITE_BACKEND_URL }/server`;
    const response = await axios.get(url, { headers: { Authorization: `Bearer ${ token }` } });
    return response;
}

async function getAllUserServers()
{
    const token = localStorage.getItem("token")
    const url = `${ import.meta.env.VITE_BACKEND_URL }/server`;
    const response = await axios.get(url, { headers: { Authorization: `Bearer ${ token }` } });


    return response.data;
}

async function getServer(id)
{
    try
    {
        const token = localStorage.getItem("token")
        const response = await axios.get(`${ import.meta.env.VITE_BACKEND_URL }/server/${ id }`, { headers: { Authorization: `Bearer ${ token }` } });
        return response.data;
    }
    catch (error)
    {
        console.log(error);
    }
}

async function updateServer(id, data)
{
    try
    {
        const token = localStorage.getItem("token")
        const response = await axios.put(`${ import.meta.env.VITE_BACKEND_URL }/server/${ id }`, data, { headers: { Authorization: `Bearer ${ token }` } });
        return response;
    }
    catch (error)
    {
        console.log(error);
    }
}

async function deleteServer(id)
{
    try
    {
        const token = localStorage.getItem("token")
        const response = await axios.delete(`${ import.meta.env.VITE_BACKEND_URL }/server/${ id }`, { headers: { Authorization: `Bearer ${ token }` } });
        return response;
    }
    catch (error)
    {
        console.log(error);
    }
}

// Channel

async function createChannel(serverId, data)
{
    try
    {
        const token = localStorage.getItem("token")
        const response = await axios.post(`${ import.meta.env.VITE_BACKEND_URL }/server/${ serverId }/channel/new`, data, { headers: { Authorization: `Bearer ${ token }` } });
        return response;
    }
    catch (error)
    {
        console.log(error);
    }
}

async function getAllChannelsInServer(serverId)
{
    try
    {
        const token = localStorage.getItem("token")
        const response = await axios.get(`${ import.meta.env.VITE_BACKEND_URL }/server/${ serverId }/channel`, { headers: { Authorization: `Bearer ${ token }` } });
        return response;
    }
    catch (error)
    {
        console.log(error);
    }
}

async function getChannel(serverId, id)
{
    try
    {
        const token = localStorage.getItem("token")
        const response = await axios.get(`${ import.meta.env.VITE_BACKEND_URL }/server/${ serverId }/channel/${ id }`, { headers: { Authorization: `Bearer ${ token }` } });
        return response.data;
    }
    catch (error)
    {
        console.log(error);
    }
}

export
{
    createServer,
    getAllServers,
    getAllUserServers,
    getServer,
    updateServer,
    deleteServer,
    createChannel,
    getAllChannelsInServer
}