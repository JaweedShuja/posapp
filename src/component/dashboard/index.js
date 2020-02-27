import React from 'react'
import Navbar from '../dashboard/NavBar.js'
import MainComponent from './MainComponent'

class index extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <MainComponent />
            </div>
        )
    }
}

export default index