import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavBar from './MainNavBar.js'
import TableNavBar from './TableNavBar.js'
import ItemsComponent from './ItemsComponent'

class MainComponent extends Component{
    render(){
        return(
            // <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-7">
                        <MainNavBar />
                        <ItemsComponent />
                    </div>
                    <div className="cole-sm-5">
                        <TableNavBar />
                    </div> 
                </div>
            // </div>
        );
    }
}

export default MainComponent