import React from 'react'
import "./App.css";
import SideContainer from './components/SideContainer/SideContainer';
import MessagesContainer from './components/MessagesContainer/MessagesContainer';
import { Cloudinary } from "@cloudinary/url-gen";

function App()
{

  /*
  Cloudinary.config
    ({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET
    });
  */

  return (
    <>

      <div className='main'>
        <SideContainer />
        <MessagesContainer />
      </div>
    </>
  )
}

export default App;