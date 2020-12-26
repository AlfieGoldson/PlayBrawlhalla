interface Props {
	title: string;
	date: string;
	tags: string[];
	excerpt: string;
	url: string;
}

export default function ArticleCard({
	title,
	date,
	tags,
	excerpt,
	url,
}: Props) {
	return (
		<div className='article-card rounded'>
			<img src='' alt='' className='thumb' />
			<h4 className='article-title'>{title}</h4>
			<div className='article-meta'>
				<p className='article-date'>{date}</p>
				<p className='article-tags'>
					{tags.map((tag) => (
						<span className='article-tag'>{tag}</span>
					))}
				</p>
			</div>
		</div>
	);
}
