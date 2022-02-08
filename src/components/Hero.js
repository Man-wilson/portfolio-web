import TextLoop from 'react-text-loop';
import Aime from '../assets/images/Aime_.jpg';
const Hero = () => {
	return (
		<div id='home' className='hero d-flex align-items-center'>
			<div className='container bg-dark'>
				<div className='row py-2 d-flex align-items-center'>
					<div className='col-md-7 pl-5'>
						<h2 className='content highlight color-white font-wg-700'>
							Hello, my name is <br />
							<span className='name-edit'> Munezero Aime</span> <br />{' '}
							<span className='high-2'>I'm a</span>
							<TextLoop>
								<span className='high'>Machine Learning Engineer</span>
								<span className='high'>Data Scientist</span>
								<span className='high'>Data Analyst</span>
								<span className='high'>Entrepreneur</span>
							</TextLoop>
							<br />
						</h2>
						<button type='button' href='Section.js' class='btn btn-info'>
							Hire me
						</button>

						<p className='role font-sz-16 font-wg-500 color-white mt-5'>
							Senior Front End Engineer{' '}
							<a href='https://google.com'>@ishemahub</a>
						</p>
					</div>

					<div className='col-md-5'>
						<img src={Aime} alt='Wilson Andela' className='avatar img-fluid' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
