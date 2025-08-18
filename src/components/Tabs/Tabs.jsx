import React from 'react'
import Popup from 'reactjs-popup'

function Tabs()
{
    return (
        <div className='tabsContainer'>
            <p>Tabs</p>

            <Popup trigger=
                {
                    <button>+</button>
                }
                modal nested>
                <form className='newServerForm'>
                    <input placeholder='Server Name' />
                    <br />
                    <br />
                    <button>Make Server</button>
                </form>
            </Popup>
        </div>
    )
}

export default Tabs