import React from 'react'
import Typewriter from 'typewriter-effect'
import Card from './Card';
import Contact from './Contact';
import About from './About';
import Data from './ApiData';


const Home = () => {

	return (
		<>
			<div className='container'>
				<div className='row' style={{ marginTop: '5rem', marginBottom: '10rem' }}>
					<div className='col' style={{ marginTop: '80px', marginBottom: '30px' }}>
						<h1 className='text'>
							<span style={{ fontWeight: 'bold', }}>I Am </span><span style={{ marginLeft: '10px', color: 'red', fontWeight: 'bold', }}>
								< Typewriter
									onInit={(typewriter) => {
										typewriter.typeString("Laxman.")
											.pauseFor(2000)
											.start();
									}} />
							</span>
						</h1>
						<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
							<span style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '25px' }}>I Love</span><span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '25px' }}>
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
						<div class="card" style={{ width: '30rem', borderRadius: '15px' }}>
							<img src="https://cdn.pixabay.com/photo/2021/08/20/15/00/road-6560656__340.jpg" class="card-img-top"
								style={{ borderRadius: '15px' }} alt="..." />

						</div>
					</div>
				</div>
			</div>

			{/* About Me */}
			<div className='container'>
				<div className='row'>
					<About />
				</div>
			</div>

			{/* Portfolio section */}

			<div className='container'>
				<div className='row'>
					<div class="section-title" style={{ marginTop: '20px' }}>
						<span> Portfolio</span>
						<h2> Portfolio</h2>
						<p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
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

			{/* Contact Me */}
			<div className='container'>
				<div className='row'>
					<Contact />
				</div>
			</div>
		</>
	)
}

export default Home