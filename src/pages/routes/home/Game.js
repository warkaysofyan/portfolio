import Green from './Green'
import Blue from './Blue'
import Bolt from './Bolt'
import Right from './Right'
import Left from './Left'
import Down from './Down'
import ActualGame from './ActualGame'
import Up from './Up'
import SnakeFood from './SnakeFood'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Game() {
	const [score, setScore] = useState(0)
	return (
		<div className='game-container'>
			<div className='shadow-container'>
				<Green className='blue' />
				<Blue className='green' />
			</div>
			<div className='bolts'>
				<Bolt className='bolt B1' />
				<Bolt className='bolt B2' />
				<Bolt className='bolt B3' />
				<Bolt className='bolt B4' />
			</div>

			<div className='game-content'>
				<ActualGame
					updateScore={e => {
						setScore(e)
					}}
				/>

				<div className='text'>
					<div className='upper-part'>
						<div>
							<p> {'//'} use keyboard </p>
							<p> {'//'} arrows to play </p>
						</div>
						<div className='arrows'>
							<Up />
							{/* <br /> */}
							<Left />
							<Down />
							<Right />
						</div>
					</div>
					<div className='down-part'>
						<p>
							{'//'} Score : {score}
						</p>
						<button>
							{' '}
							<Link to='about' className='link'>
								skip
							</Link>{' '}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
