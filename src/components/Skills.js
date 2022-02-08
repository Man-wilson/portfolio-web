const Skills = () => {
	// const skills = [
	//     'HTML & CSS | Bootstrap | Figma',
	//     'Javascript',
	//     'React JS | Redux',
	//     'Graphql | Apollo',
	//     'Python | Django & FastAPI',
	//     'PostgreSQL & Redis',
	//     'Docker',
	//     'Git | Github'
	// ];

	return (
		<div id='skills' className='container py-5'>
			<h2 className='text-center head-title pt-5 mb-5  text-light'>
				My skills
			</h2>
			<div className='row'>
				<div className='col-md-7'>
					<div className='pr-0 pr-md-5'>
						<h2 className='font-sz-24 font-wg-700 color-white mb-4'>
							My creative skills & experience.
						</h2>

						<p className='font-sz-18 font-wg-300 color-white text-justify'>
							Energetic team-player software engineer with a demonstrated
							history developing robust code for businesses. I am well versed in
							all the key languages and am able to design, code and deploy in an
							organised and efficient manner. A Javascript & Python lover and
							thinker.
						</p>

						<p className='font-sz-18 mt-4 font-wg-300 color-white text-justify'>
							Having worked on different projects helped me to adapt to the
							changes quickly and made me a mature team worker. I am able to
							work well both in a team environment as well as using my own
							initiative. I am able to work well under pressure and adhere to
							strict deadlines.
						</p>
					</div>
				</div>

				<div className='col-md-5'>
					<div className='bars'>
						<div className='info'>
							<span className='spell text-danger'>python</span>
							<span className='spell text-light'>90%</span>
						</div>
						<div className='line html'></div>
					</div>
					<div className='bars'>
						<div className='info'>
							<span className='spell text-danger'>C++</span>
							<span className='spell text-light'>70%</span>
						</div>
						<div className='line cpp'></div>
					</div>
					<div className='bars'>
						<div className='info'>
							<span className='spell text-danger'>Machine learning</span>
							<span className='spell text-light'>80%</span>
						</div>
						<div className='line css'></div>
					</div>
					<div className='bars'>
						<div className='info'>
							<span className='spell text-danger'>Deep learning</span>
							<span className='spell text-light'>85%</span>
						</div>
						<div className='line js'></div>
					</div>
					<div className='bars'>
						<div className='info'>
							<span className='spell text-danger'>Computer vision</span>
							<span className='spell text-light'>90%</span>
						</div>
						<div className='line php'></div>
					</div>
					<div className='bars'>
						<div className='info'>
							<span className='spell text-danger'>Feature Engineering</span>
							<span className='spell text-light'>80%</span>
						</div>
						<div className='line mysql'></div>
					</div>
				</div>
				{/* <div className="col-md-5">
                    <h2 className="font-sz-24 font-wg-700 color-white mb-4">Skills</h2>

                    <ul className="px-3">
                        {
                            skills.map((value, key) => (
                                <li key={key} className="font-sz-18 mb-2 font-wg-300 color-white text-justify">{value}</li>
                            ))
                        }
                    </ul>
                </div> */}
			</div>
		</div>
	);
};

export default Skills;
