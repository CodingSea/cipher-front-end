import React from 'react'
import Tabs from "../Tabs/Tabs";
import ChannelList from "../ChannelList/ChannelList";

function SideContainer()
{
    return (
        <div className='sideContainer'>
            <Tabs />
            <ChannelList />
        </div>
    )
}

export default SideContainer