import Game from './Game'

export default function Home() {
	return (
		<div>
			<div className='main-home-page'>
				<div className='container'>
					<div className='text-side'>
						<div>
							<p>Hi all. I am</p>
							<h1>Sofyan warkay</h1>
							<h3>{'>'}Front-end developer</h3>
						</div>
						<div>
							<p>{'//'} complete the game to continue</p>
							<p>{'//'} you can also see it on my Github page</p>
							<p>
								<span className='f-part'>const&nbsp;</span>
								<span className='s-part'>githubLink</span>
								<span className='t-part'> = </span>
								<span className='l-part'>“https://github.com/example/url”</span>
							</p>
						</div>
					</div>
					<div className='game-side'>
						<Game />
					</div>
				</div>
			</div>
		</div>
	)
}
