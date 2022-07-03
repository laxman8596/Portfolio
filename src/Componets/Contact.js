import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin, BsFillShareFill } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';

const Contact = () => {
	return (

		<section id="contact" class="contact" style={{ backgroundColor: '#8879B0' }}>
			<div class="container">

				<div class="section-title">
					<span>Contact Me</span>
					<h2>Contact Me</h2>

				</div>

				<div class="row">

					<div class="col-lg-6">

						<div class="row">
							<div class="col-md-12">
								<div class="info-box">
									<BsFillShareFill style={{ fontSize: '30px', color: ' rgb(243, 105, 55)', }} />
									<h3>Social Profiles</h3>
									<div class="social-links">
										<a href="https://twitter.com/home" target='_blank' class="twitter"><BsTwitter style={{ fontSize: '20px' }} /></a>
										<a href="https://www.facebook.com/" target='_blank' class="facebook"><FaFacebookF style={{ fontSize: '20px' }} /></a>
										<a href="https://github.com/" target='_blank' class="gitHub"><AiFillGithub style={{ fontSize: '20px' }} /></a>
										<a href="https://www.linkedin.com/feed/" target='_blank' class="linkedin"><BsLinkedin style={{ fontSize: '20px' }} /></a>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="info-box mt-4">
									<HiOutlineMail style={{ fontSize: '30px', color: ' rgb(243, 105, 55)', }} />
									<h3>Email Me</h3>
									<p>Annaboinalaxman6@.com</p>
								</div>
							</div>
							<div class="col-md-6">
								<div class="info-box mt-4">
									<FiPhoneCall style={{ fontSize: '30px', color: ' rgb(243, 105, 55)', }} />
									<h3>Call Me</h3>
									<p>8179318596</p>
								</div>
							</div>
						</div>

					</div>

					<div class="col-lg-6" >
						<form action="forms/contact.php" method="post" role="form" class="php-email-form">
							<div class="row">
								<div class="col-md-6 form-group">
									<input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
								</div>
								<div class="col-md-6 form-group mt-3 mt-md-0">
									<input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
								</div>
							</div>
							<div class="form-group mt-3">
								<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
							</div>
							<div class="form-group mt-3">
								<textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
							</div>
							<div class="my-3">
								<div class="loading">Loading</div>
								<div class="error-message"></div>
								<div class="sent-message">Your message has been sent. Thank you!</div>
							</div>
							<div class="text-center"><button type="submit">Send Message</button></div>
						</form>
					</div>

				</div>

			</div>

		</section>


	)
}

export default Contact