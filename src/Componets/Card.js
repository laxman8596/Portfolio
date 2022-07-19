
import React from 'react'

const Card = ({ titlee, image, urll }) => {
	return (
		<>

			<div className='col-xs-12 col-sm-6 col-md-4'>
				<div class="card my-4 text-center" style={{ borderRadius: '5px' }} >
					<img src={image} class="card-img-top" alt="..." height='400px' style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }} />
					<div class="card-body">
						<h5 class="card-title" style={{ fontWeight: 'bold' }}>{titlee}</h5>

						<a href={urll} target="_blank" rel="noopener noreferrer " class="btn btn-dark btn-sm" style={{ width: '100px', height: '35px', marginTop: '4px', paddingTop: '7px' }} >Visit Site</a>
					</div>
				</div>
			</div>


		</>
	)
}

export default Card