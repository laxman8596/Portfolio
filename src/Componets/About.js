import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import Portfolio from './Portfolio';
const About = () => {
	return (
		<>
			<section id='about' className='about'>
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
											<li><i ></i><IoIosArrowForward style={{ color: 'orangered', fontSize: '20px', marginRight: '5px' }} /> <strong>Name:</strong> <span>Annaboina Laxman</span></li>
											<li><i ></i><IoIosArrowForward style={{ color: 'orangered', fontSize: '20px', marginRight: '5px' }} /> <strong>Phone:</strong> <span>8179318596</span></li>
											<li><i ></i><IoIosArrowForward style={{ color: 'orangered', fontSize: '20px', marginRight: '5px' }} /> <strong>City:</strong> <span>Hyderabad, INDIA</span></li>
										</ul>
									</div>
									<div class="col-lg-6">
										<ul>
											<li><i ></i><IoIosArrowForward style={{ color: 'orangered', fontSize: '20px', marginRight: '5px' }} /> <strong>Age:</strong> <span>26</span></li>
											<li><i ></i><IoIosArrowForward style={{ color: 'orangered', fontSize: '20px', marginRight: '5px' }} /> <strong>Degree:</strong> <span>Under Graduation</span></li>
											<li><i ></i><IoIosArrowForward style={{ color: 'orangered', fontSize: '20px', marginRight: '5px' }} /> <strong>Email:</strong> <span>Annaboinalaxman6@gmail.com</span></li>

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