import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import Portfolio from './Portfolio';
const About = () => {
	return (
		<>
			<section id='about' className='about' style={{ backgroundColor: '#0C7B93' }}>
				<div className='container'>
					<div class="section-title">
						<span>About Me</span>
						<h2>About Me</h2>

					</div>
					<div className='row'>
						<div class="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
						<div class="col-lg-8 d-flex flex-column align-items-stretch">
							<div class="content ps-lg-4 d-flex flex-column justify-content-center">
								<div class="row">
									<div class="col-lg-6" style={{ marginTop: '20px' }}>
										<ul>
											<li><i ></i><IoIosArrowForward style={{ color: 'black', fontSize: '20px', marginRight: '5px' }} /> <strong style={{ color: 'lightgray', }} >Name : </strong> <span style={{ color: 'lightgray' }}>Annaboina Laxman</span></li>
											<li><i ></i><IoIosArrowForward style={{ color: 'black', fontSize: '20px', marginRight: '5px' }} /> <strong style={{ color: 'lightgray', }}>Phone : </strong> <span style={{ color: 'lightgray' }}>8179318596</span></li>
											<li><i ></i><IoIosArrowForward style={{ color: 'black', fontSize: '20px', marginRight: '5px' }} /> <strong style={{ color: 'lightgray', }}>City : </strong> <span style={{ color: 'lightgray' }}>Hyderabad, INDIA</span></li>
										</ul>
									</div>
									<div class="col-lg-6">
										<ul>
											<li><i ></i><IoIosArrowForward style={{ color: 'black', fontSize: '20px', marginRight: '5px' }} /> <strong style={{ color: 'lightgray', }}>Age : </strong> <span style={{ color: 'lightgray' }}>26</span></li>
											<li><i ></i><IoIosArrowForward style={{ color: 'black', fontSize: '20px', marginRight: '5px' }} /> <strong style={{ color: 'lightgray', }}>Degree : </strong> <span style={{ color: 'lightgray' }}>Under Graduation</span></li>
											<li><i ></i><IoIosArrowForward style={{ color: 'black', fontSize: '20px', marginRight: '5px' }} /> <strong style={{ color: 'lightgray', }}>Email : </strong> <span style={{ color: 'lightgray' }}>Annaboinalaxman6@gmail.com</span></li>

										</ul>

									</div>

								</div>
							</div>
						</div>
					</div>
				</div>

			</section>



		</>
	)
}

export default About;