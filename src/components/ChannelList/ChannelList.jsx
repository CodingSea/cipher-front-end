import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import { createChannel, deleteChannel, getAllChannelsInServer, updateChannel, } from '../../../lib/serverApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

function ChannelList({ currentServer, setCurrentServer, setMessages, currentChannel, setCurrentChannel })
{
    const [isOpen, setIsOpen] = useState(false);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
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

        const createdChannel = await createChannel(currentServer._id, formData);

        setIsOpen(false);

        listChannels();
    }

    async function listChannels()
    {
        const serverChannels = await getAllChannelsInServer(currentServer._id);

        let cs = { ...currentServer };
        cs.channels = serverChannels.data;
        setCurrentServer(cs);
    }

    function selectChannel(channel)
    {
        setMessages(channel.messages);
        setCurrentChannel(channel);
    }

    async function deleteChannelClick(channel)
    {
        await deleteChannel(currentServer._id, channel._id);
        listChannels();
    }

    async function handleUpdateChannel(event)
    {
        event.preventDefault();

        try
        {
            const updatedChannel = await updateChannel(currentServer._id, currentChannel._id, formData);
            setIsEditorOpen(false);

            listChannels();
        }
        catch (error)
        {
            console.log(error);
        }
    }

    function openUpdateForm(channel)
    {
        selectChannel(channel);
        formData.title = channel.title;
        setIsEditorOpen(true);
    }

    return (
        <>
            <Popup open={ isEditorOpen }
                modal nested>
                <form className='newServerForm' onSubmit={ handleUpdateChannel }>
                    <input placeholder='Server Name' name='title' type='text' onChange={ handleChange } value={ formData.title } />
                    <br />
                    <br />
                    <button type='submit'>Update Server</button>
                </form>
            </Popup>

            <div className='channelList'>
                {
                    currentServer
                        ?
                        <>
                            <h3>{ currentServer.title }</h3>
                            <button onClick={ () => setIsOpen(true) }>+</button>
                            <Popup open={ isOpen }
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
                                    <button onClick={ () => selectChannel(channel) }>{ channel.title }</button>
                                    <button onClick={ () => openUpdateForm(channel) }><FontAwesomeIcon icon={ faPenToSquare } /></button>
                                    <button onClick={ () => deleteChannelClick(channel) }><FontAwesomeIcon icon={ faTrash } style={ { color: "red" } } /></button>
                                </div>
                            )
                        })
                        :
                        null
                }
            </div>
        </>

    )
}

export default ChannelList