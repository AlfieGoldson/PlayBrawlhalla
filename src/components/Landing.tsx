export default function Landing() {
	return (
		<div className='landing'>
			<video src='/assets/bannerFast.m4v' autoPlay loop></video>
			<div className='landing-content'>
				<div className='logo-container'>
					<img
						src='/assets/Logo_BrawlhallaText640.png'
						alt=''
						height='140px'
					/>
				</div>
				<a href='#' className='cta-btn rounded'>
					Play Now
				</a>
			</div>
		</div>
	);
}
