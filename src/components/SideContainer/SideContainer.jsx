import React, { useState } from 'react'
import Tabs from "../Tabs/Tabs";
import ChannelList from "../ChannelList/ChannelList";
import { getAllServers, getAllUserServers } from '../../../lib/serverApi';
import { jwtDecode } from 'jwt-decode';
import FriendList from '../FriendsList/FriendsList';
function SideContainer({ setMessages, currentServer, setCurrentServer, setCurrentChannel })
{
    const [servers, setServers] = useState([]);
    const [show,setShow]= useState(true)
    async function listServers()
    {
        const serverList = await getAllUserServers();
        setServers(serverList);
        setMessages(["ss", "ss"])
    }
    function handleShow(){
      setShow(!show)
    }

    function updateMessages(messages)
    {
        setMessages(messages);
    }

    return (
        <div className='sideContainer'>
            <ChannelList currentServer={ currentServer } setCurrentServer={ setCurrentServer } setMessages={ setMessages } setCurrentChannel={ setCurrentChannel } />
            <view onClick={handleShow}>Show Friends</view>
           { show
            ?
            <FriendList/>
            :
            <Tabs setCurrentServer={ setCurrentServer } servers={ servers } listServers={ listServers } />
            }
            

        </div>
    )
}

export default SideContainer