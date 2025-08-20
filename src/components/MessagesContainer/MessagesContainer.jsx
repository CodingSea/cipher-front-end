import React, { useEffect, useState } from 'react';
import Settings from '../Settings/Settings';
import MessagesDisplay from '../MessagesDisplay/MessagesDisplay';
import TextInput from "../TextInput/TextInput";
import { jwtDecode } from 'jwt-decode';

function MessagesContainer({ messages, setMessages, currentServer, setCurrentServer, currentChannel })
{
    const [chatMessages, setChatMessages] = useState([]);

    function addMessage(message)
    {

        //const newMessages = {...messages, text:message, user: userData.id}
    }

    return (
        <div className='messagesContainer'>
            <MessagesDisplay messages={ messages } setMessages={ setMessages } currentServer={ currentServer } currentChannel={ currentChannel } setChatMessages={ setChatMessages } />
            <TextInput messages={ messages } setMessages={ setMessages } chatMessages={ chatMessages } setChatMessages={ setChatMessages } addMessage={ addMessage } />
        </div>
    )
}

export default MessagesContainer;