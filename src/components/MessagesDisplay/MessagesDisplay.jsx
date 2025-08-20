import React, { useEffect, useState } from 'react'
import { getAllMessagesInChannel } from '../../../lib/messageApi';
import socketIOClient from 'socket.io-client';

function MessagesDisplay({ messages, setMessages, currentServer, currentChannel })
{
    const [msgs, setMsgs] = useState([]);
    const socketio = socketIOClient(import.meta.env.VITE_BACKEND_URL);

    async function getAllChannelMessages(m)
    {
        if (currentServer == null || currentServer == null) return;

        const allMessages = m.filter((x) => 
        {
            return messages.includes(x._id);
        });
        console.log(allMessages);


        setMsgs(allMessages);
        if (msgs[0])
        {
            console.log(msgs[0].user);
        }
    }

    useEffect(() =>
    {
        //getAllChannelMessages();
    }, [messages])

    useEffect(() =>
    {
        socketio.on("Message", (m) =>
        {
            getAllChannelMessages(m);
        })
    });

    return (
        <div className='messageDisplay'>
            {
                msgs.length
                    ?
                    msgs.map((message, index) =>
                    {
                        return (
                            <div key={ index } className="message">
                                <div className="messageHeader">
                                    <span className="user">{ message.user.username }</span>
                                    <span className="timestamp">{ new Date(message.createdAt).toLocaleTimeString() }</span>
                                </div>
                                <p className="messageText">{ message.text }</p>
                            </div>
                        )
                    })
                    :
                    <p>No messages to display</p>
            }
        </div>
    )
}

export default MessagesDisplay;