import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { IconContext } from 'react-icons'

import { RiTwitterFill, RiFacebookFill, RiGithubFill } from 'react-icons/ri'

export default function RootLayout() {
	return (
		<div className='root-layout'>
			<header>
				<nav>
					<div className='grid-center'>sofyan-warkay</div>
					<div className='sec grid-center'>
						<NavLink className='navL navLF grid-center' to='/'>
							_hello
						</NavLink>
						<NavLink className='navL  navLS grid-center' to='/about'>
							_about-me
						</NavLink>
						<NavLink className='navL navLT grid-center' to='/progects'>
							_projects
						</NavLink>
					</div>
					<NavLink to='/contact' className='las grid-center'>
						_contact-me
					</NavLink>
				</nav>
			</header>
			<main className="main-from-RL" >
				<Outlet />
			</main>
			<footer>
				<ul>
					<li className='Fli'>find me in :</li>

					<li className='Sli'>
						<IconContext.Provider
							value={{ color: '#607B96', className: 'global-class-name' }}
						>
							<RiTwitterFill />
						</IconContext.Provider>
					</li>

					<li className='Tli'>
						<IconContext.Provider
							value={{ color: '#607B96', className: 'global-class-name' }}
						>
							<RiFacebookFill />
						</IconContext.Provider>
					</li>

					<li className='Lli'>
						@warkaysofyan{' '}
						<IconContext.Provider
							value={{ color: '#607B96', className: 'Llii' }}
						>
							<RiGithubFill />
						</IconContext.Provider>
					</li>
				</ul>
			</footer>
		</div>
	)
}
