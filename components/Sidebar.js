import React from 'react'
import {Avatar, IconButton, Button} from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import EmailValidator from 'email-validator'

export default function Sidebar() {
    const startChat = () => {
        const input = prompt('Please enter a users email to chat with.')

        if (!input) {
            return null
        }
        if (EmailValidator.validate(input))
    }
    return (
     <div className="sidebar">
        <div className="sidebar__header">
        <div className="sidebar__userAvatar">  <Avatar/> </div>

        <div className="sidebar__iconst">                                
                                <IconButton>
                                                <ChatIcon />

                                                </IconButton>
                                                <IconButton>
                            <MoreVertIcon />
                    </IconButton>        
          </div>
        </div>
        <div className="sidebar__search">
         <SearchIcon  />
         <input  placeholder="Search chats" />
         
        </div>
        <Button onClick={startChat}> START NEW CHAT </Button>
        
        {/* List of chats */}
     </div>
    )
}

// https://youtu.be/svlEVg0To_c?t=3555

