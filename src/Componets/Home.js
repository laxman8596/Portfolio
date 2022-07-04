import React from 'react'
import Typewriter from 'typewriter-effect'
import Card from './Card';

import About from './About';
import Data from './ApiData';


const Home = () => {

	return (
		<>
			<section style={{ backgroundColor: "#142850", }} >
				<div className='container '>
					<div className='row' style={{ marginTop: '', marginBottom: '10rem' }}>
						<div className='col' style={{ marginTop: '90px', marginBottom: '30px' }}>
							<h1 className='text'>
								<span style={{ fontWeight: 'bold', color: 'black' }}>I'm </span><span style={{ marginLeft: '10px', color: 'Whitesmoke', fontWeight: 'bold', }}>
									< Typewriter
										onInit={(typewriter) => {
											typewriter.typeString("Laxman.")
												.pauseFor(2000)
												.start();
										}} />
								</span>
							</h1>
							<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<span style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '25px', color: 'black' }}>I Love</span><span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '25px', color: 'lightgray' }}>
									< Typewriter

										onInit={(typewriter) => {
											typewriter.typeString(" Design.")
												.pause(2000)
												.pauseFor(2000)
												.deleteAll()
											typewriter.typeString("Web Devlop.")
												.start();
										}} />
								</span>
							</div>
						</div>
						<div className='col' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
							<div class="card" style={{ width: '40rem', borderRadius: '5px', }}>
								<img src="https://wallpaperaccess.com/full/3016802.jpg" class="card-img-top" height='450px' width='500px'
									style={{ borderRadius: '5px', backgroundSize: 'cover' }} alt="..." />

							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Portfolio section */}
			<section style={{ backgroundColor: '#27496D' }}>


				<div className='container'>
					<div className='row'>
						<div class="section-title" >
							<span> Portfolio</span>
							<h2> Portfolio</h2>

						</div>

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

			{/* About Me */}
			<section style={{ backgroundColor: '#0C7B93' }}>


				<div className='row'>
					<About />
				</div>

			</section>


		</>
	)
}

export default Home