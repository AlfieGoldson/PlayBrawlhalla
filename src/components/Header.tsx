export default function Header() {
	return (
		<header>
			<div className='logo-container'>
				<img
					src='/assets/Logo_BrawlhallaText640.png'
					alt=''
					height='56px'
				/>
			</div>
			<div className='main-nav'>
				<a href='#' className='main-nav-item'>
					Game
				</a>
				<a href='#' className='main-nav-item'>
					Battle Pass
				</a>
				<a href='#' className='main-nav-item'>
					News
				</a>
				<a href='#' className='main-nav-item'>
					Esports
				</a>
				<a href='#' className='main-nav-item'>
					Community
				</a>
				<a href='#' className='main-nav-item'>
					Support
				</a>
				<a href='#' className='main-nav-item cta-btn rounded'>
					Play Now
				</a>
			</div>
		</header>
	);
}
