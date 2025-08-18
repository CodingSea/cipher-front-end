import React, { useState } from 'react'
import Tabs from "../Tabs/Tabs";
import ChannelList from "../ChannelList/ChannelList";

function SideContainer()
{
    const [currentServer, setCurrentServer] = useState();

    return (
        <div className='sideContainer'>
            <Tabs setCurrentServer={setCurrentServer} />
            <ChannelList currentServer={currentServer} />
        </div>
    )
}

export default SideContainer