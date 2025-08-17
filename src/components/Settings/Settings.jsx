import React, { useState, useEffect } from 'react';
import { updateUser, getUser } from "../../../lib/userApi";

function Settings()
{

    const [formData, setFormData] = useState(
        {
            profileImage: "",
            username: ""
        }
    )

    let currentUserID = "68a1c85409dcf23999076fcd";

    function handleChange(event)
    {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData);
    }

    async function handleUpdateProfile(event)
    {
        event.preventDefault();

        const response = await updateUser(currentUserID, formData); 
    }

    async function getUserData()
    {
        const u = await getUser(currentUserID);
        setFormData({ profileImage: "", username: u.username });
    }

    useEffect(() =>
    {
        getUserData();
    }, [])

    return (
        <div>
            <h1>Settings</h1>

            <form onSubmit={handleUpdateProfile}>
                <label htmlFor="profileImage">Profile Image: </label>
                <input name="profileImage" type="file" onChange={handleChange} />

                <br />

                <label htmlFor="username">Username: </label>
                <input name="username" type="text" value={ formData.username } onChange={ handleChange } />

                <br />

                <button type="submit">Update Profile</button>
            </form>
        </div>
    )
}

export default Settings;