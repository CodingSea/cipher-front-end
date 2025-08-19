import axios from "axios";

async function createMessage(data)
{
    try
    {
        const response = await axios.post(`${ import.meta.env.VITE_BACKEND_URL }/message/new`, data);
        return response;
    }
    catch (error)
    {
        console.log(error);
    }
}

async function createChannelMessage(serverId, channelId, data)
{
    try
    {
        const token = localStorage.getItem("token")
        const response = await axios.post(`${ import.meta.env.VITE_BACKEND_URL }/server/${serverId}/channel/${channelId}/message/new`, data);
        return response;
    }
    catch (error)
    {
        console.log(error);
    }
}

async function getAllMessages()
{
    const url = `${ import.meta.env.VITE_BACKEND_URL }/message`;
    const response = await axios.get(url);
    return response;
}

async function getAllMessagesInChannel(serverId, channelId)
{
    const token = localStorage.getItem("token")
    const url = `${ import.meta.env.VITE_BACKEND_URL }/server/${serverId}/channel/${channelId}/message`;
    const response = await axios.get(url, { headers: { Authorization: `Bearer ${ token }` } });
    return response;
}

async function getMessage(id)
{
    try
    {
        const response = await axios.get(`${ import.meta.env.VITE_BACKEND_URL }/message/${ id }`);
        return response.data;
    }
    catch (error)
    {
        console.log(error);
    }
}

async function updateMessage(id, data)
{
    try
    {
        const response = await axios.put(`${ import.meta.env.VITE_BACKEND_URL }/message/${ id }`, data);
        return response;
    }
    catch (error)
    {
        console.log(error);
    }
}



export
{
    createMessage,
    getAllMessages,
    getMessage,
    updateMessage,
    createChannelMessage,
    getAllMessagesInChannel
}