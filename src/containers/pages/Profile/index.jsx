import React, { Component } from 'react';

class Profile extends Component {

	componentDidMount()
	{
		document.title = "Profile";
	}
	render(){
		return(
			<div>
				Profile
			</div>
		)
	}
}

export default Profile;