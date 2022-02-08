const Experience = () => {
	return (
		<div id='experience' className='service'>
			<h2 className='head-title title pt-5'>Work Experience</h2>
			<div className='container-fluid bg-dark'>
				<div className='row py-4'>
					<div className='col-md-4'>
						<div
							class='card text-dark bg-light mb-3'
							style={{ width: '22rem' }}
						>
							<i class='card-header bg-light fas fa-code'></i>
							<div class='card-body'>
								<h5 class='card-title title-edit'>
									Graduate Teaching Assistant at CMU-Africa
								</h5>
								<p class='card-text'>
									I am currently working as an assistant teacher in a Machine
									Learning Course entitled “ Natural Language Processing”, where
									I assist the professor in emphasizing concepts taught in
									class, evaluating assignments, and assisting students with
									questions and clarifications concerning the material presented
									in class.
								</p>
							</div>
						</div>
					</div>

					<div className='col-md-4'>
						<div
							class='card text-white bg-dark mb-3'
							style={{ width: '22rem' }}
						>
							<i class='card-header fas fa-network-wired'></i>
							<div class='card-body'>
								<h5 class='card-title title-edit'>
									Data Scientist Engineer at Avent Wave
								</h5>
								<p class='card-text'>
									I'm currently working as a part-time Data Scientist engineer
									in a start-up company (Avent Wave) that I co-founded with my
									CMU colleagues in 2021. Avent Wave provides a wide range of IT
									services, primarily Software Development, Data Analytics &
									Visualization, Big Data Processing, Cloud Consulting, and
									Database Administration & Management, and is based in Rwanda
									and operates internationally. We serve individuals, IT/Non-IT
									enterprises, and organizations in need of the latest
									technologies to optimize their performances or bring new
									products to the market.
								</p>
							</div>
						</div>
					</div>
					<div className='col-md-4 mb-3'>
						<div
							class='card text-dark bg-light mb-3'
							style={{ width: '22rem' }}
						>
							<i class='card-header bg-light fas fa-hands-helping'></i>
							<div class='card-body'>
								<h5 class='card-title title-edit'>
									Summer Network & Security Intern at AOS Ltd
								</h5>
								<p class='card-text'>
									During my time at AOS, my work involved performing penetration
									testing and vulnerability assessment using various tools such
									as OpenVas, analyzing, understanding, and troubleshooting
									network architecture.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Experience;
