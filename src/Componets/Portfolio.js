import React from 'react';
import Card from './Card'
import Data from './ApiData'

const Portfolio = () => {
	return (
		<>
			<section style={{ backgroundColor: '#FBA1A1' }}>
				<div className='container'>
					<div class="section-title" >
						<span>My Portfolio</span>
						<h2>My Portfolio</h2>

					</div>
					<div className='row' >
						{
							Data.map((item) => {
								return (
									<>

										<Card titlee={item.titel} image={item.images} urll={item.url} />

									</>
								)
							})
						}
					</div>
				</div>
			</section>
		</>
	)
}

export default Portfolio;