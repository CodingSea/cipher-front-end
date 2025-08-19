import React from 'react'
import Settings from '../Settings/Settings'
import { jwtDecode } from 'jwt-decode'
import { useState,useEffect } from 'react';
import { getUser } from '../../../lib/userApi';

function MessagesContainer(){
    const [friendsList,setFriendsList]=useState([]);
    const [showBtn,setShowBtn]= useState(false);
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
                    console.log("FRIEND: ", friend)
                    return (<>
                        <div key={index} onMouseOver={()=>{setShowBtn(true)}}  onMouseLeave={()=>{setShowBtn(false)}} >
                            
                            <p>USERNAME: {friend.username}</p>
                            {
                                showBtn
                                ?<>
                                <button/>{/* here will be the delete btn */}
                                </>
                                :
                                null
                            }
                        </div>

                   </> )
                })
            }
        </div>
    )
}

export default MessagesContainer