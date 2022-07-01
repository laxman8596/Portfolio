import React from 'react'




const Cars = [
	{
		'name': 'bmw',
		'modal': '2001',
		'price': '40lks',
		'img': 'https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X1/7625/1583398555726/front-left-side-47.jpg?impolicy=resize&imwidth=480',
	},
	{
		'name': ''
	}
]
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