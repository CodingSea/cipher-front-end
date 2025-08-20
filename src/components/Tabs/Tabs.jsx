import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import { getAllServers, createServer } from '../../../lib/serverApi';

function Tabs({ setCurrentServer, servers, listServers })
{
    const [isOpen, setIsOpen] = useState(false);
    const [isEdited, setIsEdited] = useState(false);
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

    async function handleCreateServer(event)
    {
        event.preventDefault();

        const createdServer = await createServer(formData);
        setIsOpen(false);

        listServers();
    }

    function selectServerClick(server)
    {
        setCurrentServer(server);
    }

    useEffect(() =>
    {
        listServers();
    }, [])

    return (
        <div className='tabsContainer'>
            <h3>Tabs</h3>

            <button onClick={() => setIsOpen(true)}>+</button>

            <Popup open={isOpen}
                modal nested>
                <form className='newServerForm' onSubmit={ handleCreateServer }>
                    <input placeholder='Server Name' name='title' type='text' onChange={ handleChange } />
                    <br />
                    <br />
                    <button type='submit'>Make Server</button>
                </form>
            </Popup>
            <Popup open={isEdited}
                modal nested>
                <form className='EditedServerForm' onSubmit={ handleCreateServer }>
                    <input placeholder='Server Name' name='title' type='text' onChange={ handleChange } />
                    <br />
                    <br />
                    <button type='submit'>Edit Server</button>
                </form>
            </Popup>

            {
                servers.length
                    ?
                    servers.map((server, index) => 
                    {
                        return (
                            <div key={ index } className='serverCard'>
                                <button onClick={() => selectServerClick(server)}>{ server.title }</button>
                            </div>
                        )
                    })
                    :
                    null
            }

        </div>
    )
}

export default Tabs