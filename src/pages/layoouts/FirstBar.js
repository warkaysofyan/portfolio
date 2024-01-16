import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Personel from './../../images/PersIconInfo'
import Prof from './../../images/ProIconInfo'
import Hobies from './../../images/HobIconInfo'

export default function About() {
	const [activePro, setActivePro] = useState(true)
	return (
		<div className='about-container'>
			<div className='bar-side'>
				<ul>
					<li>
						<NavLink
							to='professional-info'
							className={activePro ? 'active' : ''}
							onClick={() => {
								setActivePro(true)
							}}
						>
							<Prof />
						</NavLink>
					</li>
					<li>
						<NavLink
							to='personal-info'
							onClick={() => {
								setActivePro(false)
							}}
						>
							<Personel />
						</NavLink>
					</li>
					<li>
						<NavLink
							to='hobbies'
							onClick={() => {
								setActivePro(false)
							}}
						>
							<Hobies />
						</NavLink>
					</li>
				</ul>
			</div>
			<div className='content-side'>
				<Outlet />
			</div>
		</div>
	)
}
