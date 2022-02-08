import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
	const menus = [
		{ path: '/#home', label: 'Home' },
		{ path: '/#about', label: 'About' },
		{ path: '/#experience', label: 'Experience' },
		{ path: '/#skills', label: 'Skills' },
		{ path: '/#projects', label: 'Projects' },
		{ path: '/#contact', label: 'Contact' },
	];
	
	return (
		<Navbar expand='lg'>
			<Container>
				<Navbar.Brand href='#home' className='font-sz-24'>
					<span className='text-white'>Portfo</span>
					<span className='spa'>lio.</span>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='basic-navbar-nav' />

				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto mx-5'>
						{menus.map((data, key) => (
							<Nav.Link
								key={key}
								href={data.path}
								className='text-white font-sz-18'
							>
								{data.label}
							</Nav.Link>
						))}
					</Nav>

					<Nav>
						<Nav.Link className='text-white font-sz-18'>
							<i className='fab fa-linkedin'></i>
						</Nav.Link>

						<Nav.Link className='text-white font-sz-18'>
							<i className='fab fa-instagram'></i>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
