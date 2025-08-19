import React, { useEffect, useState } from 'react'
import { getAllMessagesInChannel } from '../../../lib/messageApi';

function MessagesDisplay({ messages, setMessages, currentServer, currentChannel })
{
    const [msgs, setMsgs] = useState([]);

    async function getAllChannelMessages()
    {
        if (currentServer == null || currentServer == null) return;

        const allMessages = await getAllMessagesInChannel(currentServer._id, currentChannel._id);

        setMsgs(allMessages.data);
        if(msgs[0])
        {
            console.log(msgs[0].user);
        }
    }

    useEffect(() =>
    {
        getAllChannelMessages();
    }, [messages])

    return (
        <div>
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