
import React from 'react'

const Card = ({ titlee, image, urll }) => {
	return (
		<>

			<div className='col-xs-12 col-sm-6 col-md-4'>
				<div class="card my-4 text-center" >
					<img src={image} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">{titlee}</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href={urll} target="_blank" rel="noopener noreferrer " class="btn btn-primary">Read more</a>
					</div>
				</div>
			</div>


		</>
	)
}

export default Card