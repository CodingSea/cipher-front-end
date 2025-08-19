import React, { useState } from 'react'
import Tabs from "../Tabs/Tabs";
import ChannelList from "../ChannelList/ChannelList";
import { getAllServers, getAllUserServers } from '../../../lib/serverApi';
import { jwtDecode } from 'jwt-decode';

function SideContainer()
{
    const [servers, setServers] = useState([]);
    const [currentServer, setCurrentServer] = useState();

    async function listServers()
    {
        const serverList = await getAllUserServers();
        setServers(serverList);
    }

    return (
        <div className='sideContainer'>
            <Tabs setCurrentServer={setCurrentServer} servers={servers} setServers={setServers} listServers={listServers} />
            <ChannelList currentServer={currentServer} setCurrentServer={setCurrentServer} listServers={listServers} />
        </div>
    )
}

export default SideContainer