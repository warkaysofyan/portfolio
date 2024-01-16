import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Personel from './../../../images/PersIconInfo'
import Prof from './../../../images/ProIconInfo'
import Hobies from './../../../images/HobIconInfo'
export default function About() {
	return (
		<div className='about-container'>
			<div className='bar-side'>
				<ul>
					<li>
						<NavLink to=''>
							<Prof />
						</NavLink>
					</li>
					<li>
						<NavLink to='personal-info'>
							<Personel />
						</NavLink>
					</li>
					<li>
						<NavLink to='hobbies'>
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
