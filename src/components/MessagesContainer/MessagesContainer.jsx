

import React, { useEffect, useState } from 'react';
import Settings from '../Settings/Settings';
import MessagesDisplay from '../MessagesDisplay/MessagesDisplay';
import TextInput from "../TextInput/TextInput";

function MessagesContainer({ messages, setMessages, currentServer, setCurrentServer, currentChannel })
{

    return (
        <div className='messagesContainer'>
            <MessagesDisplay messages={ messages } setMessages={ setMessages } currentServer={ currentServer } currentChannel={ currentChannel } />
            <TextInput />
        </div>
    )
}

export default MessagesContainer;