import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newUser } from '../../actions/userActions';

class Form extends Component {
	constructor(props){
		super(props)

		this.state = {
			username: '',
			name: '',
			email: '',
			city: '',
			lat: '0',
			lng: '0',
			rideingroup: '',
			daysofweek: ''
		}

		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange = e => {

		if(e.target.type === 'checkbox' && this.state.daysofweek === ''){
			this.setState({ daysofweek: e.target.value });
			
		}else if(e.target.type === 'checkbox' ) {
			this.setState({ daysofweek: this.state.daysofweek + ", "+e.target.value });
		}else { 
			this.setState({
				[e.target.name]: e.target.value
			})
		}
	}

	onSubmit = e => {
		e.preventDefault();

		const user = {
			username: this.state.username,
			name: this.state.name,
			email: this.state.email,
			address: {
				city: this.state.city,
				geo: {
					lat: this.state.lat,
					lng: this.state.lng
				}
			},
			rideingroup: this.state.rideingroup,
			daysofweek: this.state.daysofweek
		}

		this.props.newUser(user);

	}

    render(){
        return(
            <div>
                <form id="register" onSubmit={this.onSubmit}>
				    <div className="bg_contato">
					    <div className="row">
						    <div className="column column-6">
							    <div className="login-container">
									<div className="login-info">
										<label>
											<p className="font_login">Username</p>
										</label> 
										<input 
											type="text" 
											name="username"
											onChange={this.onChange}
											value={this.state.username}
											required 
										/>
										<p className="font_instructions">Instructions to show on input focus</p>
										
                                        <label>
											<p className="font_login">Name</p>
										</label> 
										<input 
											type="text"
											name="name"
											onChange={this.onChange}
											value={this.state.name}
											required
										/>

										<label>
											<p className="font_login">E-mail</p>
										</label> 
										<input 
											type="text"
											name="email"
											onChange={this.onChange}
											value={this.state.email}
											required
										/>
									</div>
							    </div>
						    </div>
						    <div className="column column-6">
							    <div className="login-container">
									<div className="login-info">
										<label>
											<p className="font_login">City</p>
											<p className="font_optional">optional</p>
										</label> 
										<input
											type="text"
											name="city"
											onChange={this.onChange}
											value={this.state.city}
										/>
									</div>
							    </div>
                                <p className="font_login">Ride in group?</p>
                                <div className="row">
                                    <div className="column column-4">
                                        <div className="radio">
											<input 
												type="radio"
												id="radio-1"
												name="rideingroup"
												value="Always"
												onChange={this.onChange}
											/>
                                            <label htmlFor="radio-1" className="radio-label">Always</label>
                                        </div>
                                    </div>
                                    <div className="column column-4">
                                        <div className="radio">
											<input 
												type="radio"
												id="radio-2" 
												name="rideingroup"
												value="Sometimes"
												onChange={this.onChange}
											/>
											<label  htmlFor="radio-2" className="radio-label">Sometimes</label>
                                        </div>
                                    </div>
                                    <div className="column column-4">
                                        <div className="radio">
											<input
												type="radio"
												id="radio-3"
												name="rideingroup"
												value="Never"
												onChange={this.onChange}
											/>
                                            <label htmlFor="radio-3" className="radio-label">Never</label>
                                        </div>
                                    </div>
                                </div>
                                <p className="font_login">Days of the week</p>
									<input 
										type="checkbox"
										id="test1"
										name="daysofweek"
										value="Sun"
										onChange={this.onChange}
									/>
                                    <label htmlFor="test1">Sun</label>

									<input 
										type="checkbox"
										id="test2"
										name="daysofweek"
										value="Mon"
										onChange={this.onChange}
									/>
                                    <label htmlFor="test2">Mon</label>

									<input 
										type="checkbox"
										id="test3"
										name="daysofweek"
										value="Tue"
										onChange={this.onChange}
									/>
                                    <label htmlFor="test3">Tue</label>

									<input 
										type="checkbox"
										id="test4"
										name="daysofweek"
										value="Wed"
										onChange={this.onChange}
									/>
                                    <label htmlFor="test4">Wed</label>

									<input
										type="checkbox"
										id="test5"
										name="daysofweek"
										value="Thu"
										onChange={this.onChange}
									/>
                                    <label htmlFor="test5">Thu</label>

									<input 
										type="checkbox"
										id="test6"
										name="daysofweek"
										onChange={this.onChange}
										value="Fri"
									/>
                                    <label htmlFor="test6">Fri</label>

									<input 
										type="checkbox"
										id="test7"
										name="daysofweek"
										value="Sat"
										onChange={this.onChange}
									/>
                                    <label htmlFor="test7">Sat</label>
						        </div>
					        </div>
                        </div>
					    <div className="row">
						    <div className="column column-6">
							    <div className="login-container">
								    <div className="login-info">
									    <button className="login" type="submit">Save</button>
								    </div>
							    </div>
							    <div className="save-container">
								    <div className="login-info">
									    <button className="login" type="submit">Discard</button>
								    </div>
							    </div>
						    </div>
						    <div className="column column-6"></div>
					    </div>
				</form>
            </div>
        )
    }
}

Form.propTypes = {
	newUser: PropTypes.func.isRequired
}

export default connect(null, { newUser })(Form);