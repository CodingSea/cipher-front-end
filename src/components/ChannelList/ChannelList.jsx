import React from 'react'

function ChannelList({ currentServer })
{
    return (
        <div className='channelList'>
            <p>ChannelList</p>
            {
                currentServer
                ?
                currentServer.channels.map((channel, index) =>
                {
                    return (
                        <div key={index}>
                            <p>{channel.title}</p>
                        </div>
                    )
                })
                :
                null
            }
        </div>
    )
}

export default ChannelList