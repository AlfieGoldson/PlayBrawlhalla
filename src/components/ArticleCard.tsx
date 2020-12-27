interface Props {
	thumbUrl: string;
	title: string;
	date: string;
	tags: string[];
	excerpt: string;
	url: string;
}

export default function ArticleCard({
	thumbUrl,
	title,
	date,
	tags,
	excerpt,
	url,
}: Props) {
	return (
		<div className='article-card rounded shadow'>
			<img src={thumbUrl} alt={title} className='article-thumb rounded' />
			<div className='article-content'>
				<h4 className='article-title'>{title}</h4>
				<div className='article-meta'>
					<p className='article-date'>{date}</p>
					<p className='article-tags'>
						{tags.map((tag, i) => (
							<span key={i} className='article-tag'>
								{tag}
							</span>
						))}
					</p>
				</div>
				<p className='article-excerpt'>{excerpt}</p>
			</div>
			<a href={url} className='read-more-btn cta-btn rounded shadow'>
				Read More
			</a>
		</div>
	);
}
