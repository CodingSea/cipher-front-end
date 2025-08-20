import React, { useState } from 'react'
import { createChannelMessage } from '../../../lib/messageApi';
import { getUser } from '../../../lib/userApi';
import { jwtDecode } from 'jwt-decode';
import socketIOClient from 'socket.io-client';

function TextInput({ addMessage, currentServer, currentChannel, messages, setMessages })
{
    const [message, setMessage] = useState({text:"", user: ""});
    const socketio = socketIOClient(import.meta.env.VITE_BACKEND_URL);


    function handleChange(event)
    {
        setMessage({ ...message, [event.target.name]: event.target.value });
    }

    async function sendMessage(event)
    {
        event.preventDefault()

        const token = localStorage.getItem("token");
        const userData = jwtDecode(token);
        const u = await getUser(userData.id);
        const m = {...message, user: u._id}
        console.log(m);
        const mgs = await createChannelMessage(currentServer._id, currentChannel._id, m);
        console.log(mgs)
        setMessages([...messages, mgs.data._id]);
        sendToSocket(messages);
        setMessage({text: ""});
    }

    function sendToSocket(message)
    {
        socketio.emit("Message", messages);
    }

    return (
        <form className='textInput' onSubmit={sendMessage}>
            <input type='text' name='text' id='text' placeholder='Enter text to talk to other users' onChange={ handleChange } value={message.text}/>
            <button type='submit'>Send</button>
        </form>
    )
}

export default TextInput