import React, {Component} from 'react';
import ComponentCard from '../../../../components/ComponentCard';
import axios from 'axios';
class Card extends Component {

	state = {
		dataIndonesia : []
	}

	outputDataIndonesia =  async () => {
		await axios.get('/indonesia').then(res => {
			const datas = res.data;	
			this.setState({
				dataIndonesia : datas
			});
		});

		
	}

	componentDidMount() {
		this.outputDataIndonesia();
	}

	render(){
		return(

			<section className="container-card">
				<h3 className="header-card">Data Korban COVID-19 di Indonesia </h3>
				{
					this.state.dataIndonesia.map( data => {
						return <ComponentCard key={data.name} meninggal={data.meninggal} positif={data.positif} sembuh={data.sembuh}/>
					})
				}
			</section>
		)
	}
}




export default Card;