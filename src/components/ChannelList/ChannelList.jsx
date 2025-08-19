import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import { createChannel, getAllChannelsInServer, } from '../../../lib/serverApi';

function ChannelList({ currentServer, setCurrentServer, setServers, listServers })
{
    const [isOpen, setIsOpen] = useState(false);
    const [channels, setChannels] = useState([])
    const [formData, setFormData] = useState
        (
            {
                title: ""
            }
        )

    function handleChange(event)
    {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    async function handleCreateChannel(event)
    {
        event.preventDefault();

        console.log()

        const createdChannel = await createChannel(currentServer._id, formData);

        setIsOpen(false);

        listChannels();
    }

    async function listChannels()
    {
        const serverChannels = await getAllChannelsInServer(currentServer._id);
        console.log(serverChannels);
        
        let cs = {...currentServer};
        cs.channels = serverChannels.data;
        setCurrentServer(cs);
    }
    


    return (
        <div className='channelList'>
            {
                currentServer
                    ?
                    <>
                        <h3>{ currentServer.title }</h3>
                        <button onClick={() => setIsOpen(true)}>+</button>
                        <Popup open={isOpen}
                            modal nested>
                            <form className='newServerForm' onSubmit={ handleCreateChannel }>
                                <input placeholder='Channel Name' name='title' type='text' onChange={ handleChange } />
                                <br />
                                <br />
                                <button type='submit'>Make Channel</button>
                            </form>
                        </Popup>
                    </>
                    :
                    <h3>ChannelList</h3>
            }



            {
                currentServer
                    ?
                    currentServer.channels.map((channel, index) =>
                    {
                        return (
                            <div key={ index } className='serverCard'>
                                <button>{ channel.title }</button>
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