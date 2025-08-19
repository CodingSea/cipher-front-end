import React, { useEffect, useState } from 'react'
import Settings from '../Settings/Settings'
import MessagesDisplay from '../MessagesDisplay/MessagesDisplay'

function MessagesContainer({ messages, setMessages, currentServer, setCurrentServer, currentChannel })
{

    return (
        <div className='messagesContainer'>
            <MessagesDisplay messages={ messages } setMessages={ setMessages } currentServer={currentServer} currentChannel={currentChannel} />
        </div>
    )
}

export default MessagesContainer