import React, { useEffect, useState } from 'react';
import Settings from '../Settings/Settings';
import MessagesDisplay from '../MessagesDisplay/MessagesDisplay';
import TextInput from "../TextInput/TextInput";

function MessagesContainer({ messages, setMessages, currentServer, setCurrentServer, currentChannel })
{
    const [chatMessages, setChatMessages] = useState([]);

    return (
        <div className='messagesContainer'>
            <MessagesDisplay messages={ messages } setMessages={ setMessages } currentServer={ currentServer } currentChannel={ currentChannel } setChatMessages={setChatMessages} />
            <TextInput messages chatMessages={chatMessages} setChatMessages={setChatMessages} />
        </div>
    )
}

export default MessagesContainer;