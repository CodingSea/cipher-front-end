import React, { useState } from 'react'
import Tabs from "../Tabs/Tabs";
import ChannelList from "../ChannelList/ChannelList";
import { getAllServers, getAllUserServers } from '../../../lib/serverApi';
import { jwtDecode } from 'jwt-decode';

function SideContainer({ setMessages })
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
            <Tabs setCurrentServer={ setCurrentServer } servers={ servers } listServers={ listServers } />
            <ChannelList currentServer={ currentServer } setCurrentServer={ setCurrentServer } setMessage={setMessages} />
        </div>
    )
}

export default SideContainer