import React from 'react'

import Sidebar from '../components/Sidebar';
import Videos from '../components/Videos';

function MainPage() {
    return (
        <div className='main-page'>
            <Sidebar/>
            <Videos/>
        </div>
    )
}

export default MainPage
