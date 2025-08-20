import React, { useState } from 'react'
import Tabs from "../Tabs/Tabs";
import ChannelList from "../ChannelList/ChannelList";
import { getAllServers, getAllUserServers } from '../../../lib/serverApi';
import { jwtDecode } from 'jwt-decode';

function SideContainer({ setMessages, currentServer, setCurrentServer, currentChannel, setCurrentChannel })
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
            <Tabs currentServer={currentServer} setCurrentServer={ setCurrentServer } servers={ servers } listServers={ listServers } />
            <ChannelList currentServer={ currentServer } setCurrentServer={ setCurrentServer } setMessages={ setMessages } currentChannel={currentChannel} setCurrentChannel={ setCurrentChannel } />
        </div>
    )
}

export default SideContainer