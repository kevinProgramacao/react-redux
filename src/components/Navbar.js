import React, { Component } from 'react';

class Navbar extends Component {
    render(){
        return(
                <div className="row">
                    <div className="column column-6">
                        <div className="container_ball">
                            <i className="fas fa-volleyball-ball"></i>
                        </div>
                        <h4 className="font_title">Venturus Sport</h4>
                    </div>
                    <div className="column column-6" id="nav_form">
                        <div className="user_ball">
                            <p className="user_name">JB</p>
                        </div>
                        <nav>
                            <div className="btn">
                                Jason Bourne 
                                <i className="fas fa-angle-down"></i>
                            </div>
                            <div className="dropdown">
                                <a href="">Friends List</a>
                                <a href="">Saved Items</a>
                                <a href="">Notifications</a>
                                <a href="">User Preferences</a>
                                <hr className="line_drop" />
                                <a href="">Log out</a>
                            </div>
                        </nav>
                    </div>
                </div>
        )
    }
}

export default Navbar;