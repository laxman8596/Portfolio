
import React from 'react'

const Card = ({ titlee, image, urll }) => {
	return (
		<>

			<div className='col-xs-12 col-sm-6 col-md-4'>
				<div class="card my-4 text-center" style={{ borderRadius: '20px' }} >
					<img src={image} class="card-img-top" alt="..." height='400px' style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
					<div class="card-body">
						<h5 class="card-title">{titlee}</h5>

						<a href={urll} target="_blank" rel="noopener noreferrer " class="btn btn-primary" style={{ backgroundColor: 'black' }}>Read more</a>
					</div>
				</div>
			</div>


		</>
	)
}

export default Card