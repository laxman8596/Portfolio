import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light  navbar-fixed-top">
				<div class="container-fluid">
					<a class="navbar-brand" href="#"> My Portfolio</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0" >
							<NavLink to="/">
								<li class="nav-item nav-link " style={{ margin: '0 10px' }}>Home</li>
							</NavLink>
							<NavLink to="/about">
								<li class="nav-item nav-link" style={{ margin: '0 10px' }}>About</li>
							</NavLink>
							<NavLink to="/Portfolio">
								<li class="nav-item nav-link" style={{ margin: '0 10px' }}>Portfolio</li>
							</NavLink>
							<NavLink to="/contact">
								<li class="nav-item nav-link" style={{ margin: '0 10px' }}>Contact</li>
							</NavLink>


						</ul>

					</div>
				</div>
				<i class="bi bi-list mobile-nav-toggle"></i>
			</nav>
		</div>
	)
}

export default Navbar