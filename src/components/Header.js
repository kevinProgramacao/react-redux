import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
            <div className="row">
                <div className="bg_home">
                    <div className="chamada_bg_home">
                        <div className="row">
                            <a href="#">
                                <i className="fas fa-home home_arrow"></i>
                            </a>
                            <i className="fas fa-angle-right"></i>

                            <a href="#" className="font_page">Page Name</a>
                            <i className="fas fa-angle-right page_arrow"></i>
                            
                            <a href="#" className="font_dots">...</a>
                            <i className="fas fa-angle-right page_arrow"></i>
                        
                            <a href="#" className="font_page">Current Page</a>
                        </div>
                    </div>
                </div>
                <div className="bg_cycling">
                <div className="row">
                    <div className="column column-8">
                        <div className="chamada_sports">
                                <div className="row">
                                    <div className="column column-4">
                                        <div className="row">
                                            <div className="column column-6">
                                                <i className="fas fa-puzzle-piece icon_cycling"></i>
                                            </div>
                                            <div className="column column-6">
                                                <h3 className="font_title_sports">Sports Type</h3>
                                                <h4 className="font_title_sub_sports">Cycling</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column column-4">
                                        <div className="row">
                                            <div className="column column-6">
                                                <i className="fas fa-trophy icon_cycling"></i>
                                            </div>
                                            <div className="column column-6">
                                                <h3 className="font_title_sports">Mode</h3>
                                                <h4 className="font_title_sub_sports">Advanced</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column column-4">
                                        <div className="row">
                                            <div className="column column-6">
                                                <i className="fas fa-map-signs icon_cycling"></i>
                                            </div>
                                            <div className="column column-6">
                                                <h3  className="font_title_sports">Route</h3>
                                                <h4 className="font_title_sub_sports">30 miles</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="column column-4"></div>
                </div>
            </div>
          </div>
        )
    }
}

export default Header;