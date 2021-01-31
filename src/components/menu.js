import React from 'react';
import '../css/App.css';
import {Link} from "react-router-dom";

class Menu extends React.Component{



    render() {

        return(

            <div>
                <div className="container">
                    <div className="menu">
                        <div>
                            {this.props.categories.map((area, index) => {
                                return (
                                    <Link key={index} to={area.url}>{area.title}</Link>
                                )})}
                        </div>
                        <div className="arama">
                            <input type="text" placeholder="Arama"/>
                            <span className="fa fa-search has-feedback"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Menu;