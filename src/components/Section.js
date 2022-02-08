const Section = () => {
	return (
		<section id='contact' className='container mt-5 contact'>
			<div className='max-width'>
				<h2 className='title text-white'>Contact me</h2>
				<div className='row'>
					<div className='col-md-5'>
						<div className='text text-white mb-3'>Get in Touch</div>
						<div className=''>
							<div className='d-flex'>
								<i className='fas fa-user text-white mr-4'></i>
								<div className=' mb-2'>
									<div className='head text-white'>Name</div>
									<div className='sub-title text-white'>Munezero Aime</div>
								</div>
							</div>
							<div className='d-flex'>
								<i className='fas fa-map-marker-alt text-white mr-4'></i>
								<div className=' mb-2'>
									<div className='head text-white'>Address</div>
									<div className='sub-title text-white'>Kigali, Rwanda</div>
								</div>
							</div>
							<div className='d-flex'>
								<i className='fas fa-envelope text-white mr-4'></i>
								<div className=' mb-2'>
									<div className='head text-white'>Email</div>
									<div className='sub-title text-white'>Munezero@gmail.com</div>
								</div>
							</div>
							<div className='d-flex'>
								<i className='fas fa-phone text-white mr-4'></i>
								<div className=' mb-2'>
									<div className='head text-white'>Phone</div>
									<div className='sub-title text-white'>+250785161514</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-7 column right'>
						<div className='text mb-3 text-white'> Message me</div>
						<form
							action='https://formspree.io/f/mdobezpw'
							method='POST'
							id='my-form'
						>
							<div class='fields'>
								<div class='field name'>
									<input name='Name' type='text' placeholder='Name' required />
								</div>
								<div class='field email'>
									<input
										name='E-mail'
										type='email'
										placeholder='Email'
										required
									/>
								</div>
							</div>
							<div class='field'>
								<input
									name='Subject'
									type='text'
									placeholder='Subject'
									required
								/>
							</div>
							<div class='field textarea'>
								<textarea
									name='Message'
									cols='30'
									rows='10'
									placeholder='Message..'
									required=''
								></textarea>
							</div>
							<div class='button-area'>
								<button type='submit'>Send message</button>
							</div>
						</form>
						<div id='status'></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section;

// <footer className="footer">
//     <div className="container-fluid bg-white">
//         <div className="row">
//             <div className="col-lg-12">
//                 <h2 className="font-sz-32 font-wg-700 text-center color-dark pt-5">Contact me
//                 </h2>
//             </div>
//         </div>
//     </div>
//     <div className="container-fluid">
//       <div className="row py-4 bg-white">
//             <div className="col-md-5 ml-5">
//                 <p className="font-sz-24 text-dark font-wg-700 pt-3">Get in Touch</p>
//                 <p className="font-sz-18 font-wg-700 pt-3">Name <br />
//                 <span className="font-sz-16 font-wg-400">Munezero Aime</span></p>
//                 <p className="font-sz-18 font-wg-700 pt-3">Address <br />
//                 <span className="font-sz-16 font-wg-400">Kigali, Rwanda</span></p>
//                 <p className="font-sz-18 font-wg-700 pt-3">Email <br />
//                 <span className="font-sz-16 font-wg-400">Munezero@gmail.com</span></p>
//                 <p className="font-sz-18 font-wg-700 pt-3">Phone <br />
//                 <span className="font-sz-16 font-wg-400">+250785161514</span></p>
//             </div>
//               <div className="col-md-7">
//                 <p className="font-sz-24 text-dark font-wg-700 pt-3">message me</p>
//               </div>
//      </div>
//     </div>
// </footer>
