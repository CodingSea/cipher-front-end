import React from 'react'

function TextInput()
{
    return (
        <div className='textInput'>
            <input type='text' name='text' placeholder='Enter text to talk to other users' />
            <button>Send</button>
        </div>
    )
}

export default TextInput