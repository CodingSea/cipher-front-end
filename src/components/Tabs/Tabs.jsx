import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import { getAllServers, createServer, deleteServer } from '../../../lib/serverApi'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

function Tabs({ setCurrentServer, servers, listServers })
{
    const [isOpen, setIsOpen] = useState(false);
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

        try
        {
            const createdServer = await createServer(formData);
            setIsOpen(false);

            listServers();
        }
        catch(error)
        {
            console.log(error);
        }
    }

    function selectServerClick(server)
    {
        setCurrentServer(server);
    }

    async function deleteServerClick(server)
    {
        await deleteServer(server._id);
        listServers();
    }
    
    function openUpdateForm(server)
    {
        listServers();
    }

    useEffect(() =>
    {
        listServers();
    }, [])

    return (
        <div className='tabsContainer'>
            <h3>Tabs</h3>

            <button onClick={ () => setIsOpen(true) }>+</button>

            <Popup open={ isOpen }
                modal nested>
                <form className='newServerForm' onSubmit={ handleCreateServer }>
                    <input placeholder='Server Name' name='title' type='text' onChange={ handleChange } />
                    <br />
                    <br />
                    <button type='submit'>Make Server</button>
                </form>
            </Popup>

            {
                servers.length
                    ?
                    servers.map((server, index) => 
                    {
                        return (
                            <div key={ index } className='serverCard'>
                                <button onClick={ () => selectServerClick(server) }>{ server.title }</button>
                                <button onClick={ () => openUpdateForm(server) }><FontAwesomeIcon icon={faPenToSquare} /></button>
                                <button onClick={ () => deleteServerClick(server) }><FontAwesomeIcon icon={faTrash} style={{color:"red"}} /></button>
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