import Head from 'next/head';

import Header from '../components/Header';
import Landing from '../components/Landing';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
	return (
		<div>
			<Header />
			<Landing />
			<div className='section-f2p-desc'>
				<h3>Free to play</h3>
				<p>
					No Pay to Win. No Pay to Play. No hidden fees. No monthly
					costs. No pay walls.
					<br />
					And it’s going to stay that way forever.
				</p>
			</div>
			<div className='section-trailer'>
				<iframe
					width='560'
					height='315'
					src='https://www.youtube.com/embed/Mx25Q3LKQ9Q'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
			</div>
			<div className='section-news'>
				<svg
					className='top'
					viewBox='0, 0, 1, 1'
					preserveAspectRatio='none'
				>
					<polygon points='0,0.15 1,0 1,0.85 0,1' />
				</svg>
				<h3>Recent News</h3>
				<div className='articles'>
					<ArticleCard
						thumbUrl='/assets/RotationMainGraphic2_400x225.jpg'
						title='Test Title'
						date='Nov 3, 99'
						tags={['Weekly Rotation']}
						excerpt='It’s the most joyful time of the year! Last week we welcomed the Brawlhalliday season with a festive UI takeover, all new main menu music, bonus login Gold, and exclusive seasonal items, including Skins, a new Podium, Winter Holiday Colors, and much more! For those in...'
						url='#'
					/>
					<ArticleCard
						thumbUrl='/assets/RotationMainGraphic2_400x225.jpg'
						title='Test Title'
						date='Nov 3, 99'
						tags={['Weekly Rotation']}
						excerpt='It’s the most joyful time of the year! Last week we welcomed the Brawlhalliday season with a festive UI takeover, all new main menu music, bonus login Gold, and exclusive seasonal items, including Skins, a new Podium, Winter Holiday Colors, and much more! For those in...'
						url='#'
					/>
					<ArticleCard
						thumbUrl='/assets/RotationMainGraphic2_400x225.jpg'
						title='Test Title'
						date='Nov 3, 99'
						tags={['Weekly Rotation']}
						excerpt='It’s the most joyful time of the year! Last week we welcomed the Brawlhalliday season with a festive UI takeover, all new main menu music, bonus login Gold, and exclusive seasonal items, including Skins, a new Podium, Winter Holiday Colors, and much more! For those in...'
						url='#'
					/>
				</div>
			</div>
		</div>
	);
}
