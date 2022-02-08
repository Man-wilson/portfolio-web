import TextLoop from 'react-text-loop';
import mune from '../assets/images/Aime_M.jpg';
const About = () => {
	return (
		<div id='about' className='service bg-light'>
			<h2 className='head-title text-dark p-5'>About me</h2>
			<div className='container-fluid bg-light'>
				<div className='row py-4'>
					<div className='col-md-4 mb-3 pl-5'>
						<img src={mune} style={{ width: '22rem' }} alt='' />
					</div>
					<div className='col-lg-6 ml-5 mt-3 pt-2 pl-5'>
						<div className='content color-dark'>
							<span className='iam'>I'm Munezero,</span>{' '}
							<TextLoop>
								<span className='high'>Machine Learning Engineer</span>
								<span className='high'>Data Analyst</span>
								<span className='high'>Data scientist </span>
							</TextLoop>
						</div>
						<p className='font-sz-18 font-wg-300 color-dark text-justify'>
							I'm an ML/AI enthusiast pursuing a master's degree in Applied
							Machine Learning at Carnegie Mellon University, one of the world's
							leading AI academic institutions. I've worked on AI systems that
							help people make better decisions in their environments. I
							commonly use different Machine learning and Data Science tools and
							Frameworks such as Scikit-Learn, Pytorch, etc. I'm interested in
							developing data-driven models that may be used to improve people's
							lives in a variety of disciplines.
						</p>
						<a className='butt' href='#Section'>
							Request My CV
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default About;
