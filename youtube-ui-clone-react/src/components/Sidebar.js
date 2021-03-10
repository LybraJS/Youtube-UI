import React from 'react'

import '../index.css';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function Sidebar() {
    return (
        
            <div className='sidebar'>
                <div className='sidebar-upper-menu'>
                    <div className='menu-field'>
                        <HomeIcon/>
                        <p>Start</p>
                    </div>
                    <div className='menu-field'>
                        <WhatshotIcon/>
                        <p>Trends</p>
                    </div>
                    <div className='menu-field'>
                        <SubscriptionsIcon/>
                        <p>Subscriptions</p>
                    </div>
                </div>
                <div className='sidebar-lower-menu'>
                    <div className='menu-field'>
                        <VideoLibraryIcon/>
                        <p>Library</p>
                    </div>
                    <div className='menu-field'>
                        <HistoryIcon/>
                        <p>History</p>
                    </div>
                    <div className='menu-field'>
                        <OndemandVideoIcon/>
                        <p>Your videos</p>
                    </div>
                    <div className='menu-field'>
                        <WatchLaterIcon/>
                        <p>Watch later</p>
                    </div>
                    <div className='menu-field'>
                        <ThumbUpIcon/>
                        <p>Liked videos</p>
                    </div>

                </div>
            </div>
       
    )
}

export default Sidebar
