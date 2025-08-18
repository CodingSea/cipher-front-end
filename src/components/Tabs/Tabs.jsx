import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import { getAllServers, createServer } from '../../../lib/serverApi';

function Tabs()
{
    const [servers, setServers] = useState([]);
    const [formData, setFormData] = useState(
        {
            title: ""
        }
    )

    function handleChange(event)
    {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData);
    }

    async function handleCreateServer(event)
    {
        event.preventDefault();

        const createdServer = await createServer(formData);
        console.log(createdServer);
        
    }

    async function listServers()
    {
        const serverList = await getAllServers();
        setServers(serverList.data);
    }

    useEffect(() =>
    {
        listServers();
    }, [])

    return (
        <div className='tabsContainer'>
            <p>Tabs</p>

            <Popup trigger=
                {
                    <button>+</button>
                }
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
                        <div key={index} className='server'>
                            <p>{server.title}</p>
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