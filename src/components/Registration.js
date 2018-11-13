import React, { Component } from 'react';
import Form from './form/Form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newUser } from '../actions/userActions';

class Registration extends Component {
    render(){
        return(
            <div>
                <div className="bg_registration">
                    <div className="row">
                        <div className="column column-4">
                            <h1 className="font_user">Registration</h1>
                        </div>
                        <div className="column column-8">
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                        <div className="column column-4">
                            <h1 className="font_registration">Need help?</h1>
                            <div className="row">
                                <div className="column column-2">
                                    <i className="far fa-life-ring icon_registration"></i>
                                </div>
                                <div className="column column-10">
                                    <h3 className="font_sub_registration">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="column column-4">
                            <h1 className="font_registration">Why register?</h1>
                            <div className="row">
                                <div className="column column-2">
                                    <i className="fas fa-heartbeat icon_registration"></i>
                                </div>
                                <div className="column column-10">
                                    <h3 className="font_sub_registration">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="column column-4">
                            <h1 className="font_registration">What people are saying...</h1>
                            <div className="row">
                                <div className="column column-2">
                                    <i className="fas fa-smile icon_registration"></i>
                                </div>
                                <div className="column column-10">
                                    <h3 className="font_sub_registration">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <hr className="line" />
                    </div>
                </div>

                <Form />
            </div>
        )
    }
}

Registration.propTypes = {
	newUser: PropTypes.func.isRequired
}

export default connect(null, { newUser })(Registration);