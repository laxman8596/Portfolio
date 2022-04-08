import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
const About = () => {
	return (
		<>
			<section id='about' className='about'>
				<div className='container'>
					<div class="section-title">
						<span>About Me</span>
						<h2>About Me</h2>
						<p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
					</div>
					<div className='row'>
						<div class="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
						<div class="col-lg-8 d-flex flex-column align-items-stretch">
							<div class="content ps-lg-4 d-flex flex-column justify-content-center">
								<div class="row">
									<div class="col-lg-6" style={{ marginTop: '20px' }}>
										<ul>
											<li><i ></i><IoIosArrowForward style={{ color: 'orangered', fontSize: '20px', marginRight: '5px' }} /> <strong>Name:</strong> <span>Annaboina Laxman</span></li>
											<li><i ></i><IoIosArrowForward style={{ color: 'orangered', fontSize: '20px', marginRight: '5px' }} /> <strong>Website:</strong> <span>Annaboinalaxman6@gmail.com</span></li>
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
				<div>
					<h2 className='text-center'>My Skils</h2>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
						<span className='skils'><img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" width="100px" height="100px" /></span>
						<span className='skils'><img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png" width="100px" height="100px" /></span>
						<span className='skils'><img src="https://brandlogos.net/wp-content/uploads/2016/06/bootstrap-logo-vector-download.jpg" width="100px" height="100px" style={{ borderRadius: '50%' }} /></span>
						<span className='skils'><img src="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png" width="100px" height="100px" /></span>
						<span className='skils'><img src="https://crowdcast-prod.imgix.net/-KHhIzuATU2K4OVPd2sP/event-cover-5388?w=800" width="100px" height="100px" style={{ borderRadius: '50%' }} /></span>
						<span className='skils'><img src="https://tl.vhv.rs/dpng/s/35-358510_javascript-logo-hd-png-download.png" width="100px" height="100px" style={{ borderRadius: '50%' }} /></span>
					</div>
				</div>
			</section>



		</>
	)
}

export default About;