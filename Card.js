import React from 'react'

function Card() {
	return (
		<>
			{
				Cars.map((item) =>
					<div class="card" style="width: 18rem;">
						<img class="card-img-top" src="..." alt="Card image cap" />
						<div class="card-body">
							<h5 class="card-title">{item.name}</h5>
							<p class="card-text">{item.modal}</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				)
			}
		</>
	)
}

export default Card