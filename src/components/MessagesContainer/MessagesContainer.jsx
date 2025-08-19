import React from 'react'
import Settings from '../Settings/Settings'
import { jwtDecode } from 'jwt-decode'
import { useState,useEffect } from 'react';
import { getUser } from '../../../lib/userApi';

function MessagesContainer(){
    const [friendsList,setFriendsList]=useState([])

    async function getFriends() {
        const token =localStorage.getItem("token");
        const userId = jwtDecode(token);
        const currentUser=await getUser(userId.id);
        setFriendsList(currentUser.friends);
    }
        useEffect(() => {
            getFriends()
        }, [])   
    
    return (
        <div className='messagesContainer'>
            <p>MessagesContainer</p>
            {
                friendsList.map((friend,index)=>{
                    return (
                        <div key={index}>
                            <p>{friend.username}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MessagesContainer