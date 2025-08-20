import React, { useState } from 'react'
import Tabs from "../Tabs/Tabs";
import ChannelList from "../ChannelList/ChannelList";
import { getAllServers, getAllUserServers } from '../../../lib/serverApi';
import { jwtDecode } from 'jwt-decode';

function SideContainer({ setMessages, currentServer, setCurrentServer, setCurrentChannel })
{
    const [servers, setServers] = useState([]);

    async function listServers()
    {
        const serverList = await getAllUserServers();
        setServers(serverList);
    }

    function updateMessages(messages)
    {
        setMessages(messages);
    }

    return (
        <div className='sideContainer'>
            <Tabs setCurrentServer={ setCurrentServer } servers={ servers } listServers={ listServers } />
            <ChannelList currentServer={ currentServer } setCurrentServer={ setCurrentServer } setMessages={ setMessages } setCurrentChannel={ setCurrentChannel } />
        </div>
    )
}

export default SideContainer