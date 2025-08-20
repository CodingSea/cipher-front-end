<<<<<<< HEAD
import React from 'react'
import Settings from '../Settings/Settings'
import { jwtDecode } from 'jwt-decode'
import { useState, useEffect } from 'react';
import { getUser } from '../../../lib/userApi';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
=======
import React, { useEffect, useState } from 'react';
import Settings from '../Settings/Settings';
import MessagesDisplay from '../MessagesDisplay/MessagesDisplay';
import TextInput from "../TextInput/TextInput";
>>>>>>> main

function MessagesContainer({ messages, setMessages, currentServer, setCurrentServer, currentChannel })
{
<<<<<<< HEAD
   
    const [friendsList, setFriendsList] = useState([]);
    const [showBtn, setShowBtn] = useState(null);
    async function getFriends()
    {
        const token = localStorage.getItem("token");
        const userId = jwtDecode(token);
        const currentUser = await getUser(userId.id);
        console.log("CURRENT USER:", currentUser)
        setFriendsList(currentUser.friends);
        console.log(friendsList)
        
    }
     useEffect(() =>
    {
        getFriends()    
    }, [])

    return (
        <div className='messagesContainer'>
            <p>MessagesContainer</p>

            {
                friendsList.map((friend, index) =>
                {
                    console.log("FRIEND: ", friend)
                    return (<>
                        <div key={ index } onMouseOver={ () => { setShowBtn(true) } } onMouseLeave={ () => { setShowBtn(false) } } >

                            <p>USERNAME: { friend.username }</p>
                            {
                                showBtn
                                    ? <>
                                        <DeleteBtn />
                                    </>
                                    :
                                    null
                            }
                        </div>

                    </>)
                })
            }
=======

    return (
        <div className='messagesContainer'>
            <MessagesDisplay messages={ messages } setMessages={ setMessages } currentServer={ currentServer } currentChannel={ currentChannel } />
            <TextInput />
>>>>>>> main
        </div>
    )
}

export default MessagesContainer;