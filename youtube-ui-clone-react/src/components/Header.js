import React from 'react'

import '../index.css';

import YoutubeIcon from '../assets/youtube-1495277_640.png';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div className='header-container'>
            <div className='header-left'>
                <MenuIcon className='header-left-icon' fontSize='default'/>
                <img className='yt-icon' src={YoutubeIcon}/>
            </div>
           <div className = 'header-center'>
                <input className='header-center-input' placeholder='Search' type='text'/>
                <div className='header-center-icon-container'>
                <SearchIcon className='header-center-icon'/>

                </div>
           </div>
            <div className='header-right'>
                <MicIcon/>
                <VideoCallIcon/>
                <AppsIcon/>
                <NotificationsIcon/>
                <AccountCircleIcon/>
            </div>
        </div>
    )
}

export default Header
            


                    
                    
                
