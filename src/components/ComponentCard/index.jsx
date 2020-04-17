import React, {Fragment} from 'react';

const ComponentCard = (props) => {
	return(
		<Fragment>
			<div className='card red'>
				<h3 className="keterangan-korban">Meninggal</h3>
				<h3 className="data-korban">{props.meninggal} Orang</h3>
			</div>
			<div className='card blue'>
				<h3 className="keterangan-korban">Positif</h3>
				<h3 className="data-korban">{props.positif} Orang</h3>
			</div>
			<div className='card green'>
				<h3 className="keterangan-korban">Sembuh</h3>
				<h3 className="data-korban">{props.sembuh} Orang</h3>
			</div>
		</Fragment>
	)
}

export default ComponentCard;