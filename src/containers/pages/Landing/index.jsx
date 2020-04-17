import React, {Component, Fragment} from 'react';
import svg from '../../../assets/img/svg/social.svg';
import Card from './Card';
import TableData from './TableData';
class Landing extends Component {

	componentDidMount()
	{
		document.title = "Save Indonesia";
	}

	render() { 
		return(
			<Fragment>
				<section className="hero">
					<div className="hero-text">
						<h2>Lawan Corona Untuk Indonesia <span className="highlight">Aman</span></h2>
						<p className="sub-hero-text">Semenjak ada kamu, mending <span>#dirumahaja</span></p>
					</div>

					<div className="hero-img">
						<img src={svg} alt=""/>
					</div>
				</section>
				<Card key='card'/>
				<TableData/>
			</Fragment>
		)
	}
}

export default Landing;