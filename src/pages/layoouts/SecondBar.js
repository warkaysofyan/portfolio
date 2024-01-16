import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { MdEmail, MdPhoneEnabled } from 'react-icons/md'

import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'

import { FaCaretDown, FaCaretRight } from 'react-icons/fa'

const UlList = props => {
	return (
		<ul>
			{props.arr.branshes.map(el2 => (
				<li>
					{el2.icon}
					<div>
						<NavLink to={el2.to}>{el2.name}</NavLink>
					</div>
				</li>
			))}
		</ul>
	)
}

export default function SecondBar(props) {
	const [open, setOpen] = useState([true, true, true])
	const [openCat, setOpenCat] = useState([true, true])

	let handleClick = e => {
		open[e] = !open[e]
		let arr = [...open]
		setOpen(arr)
	}
	const CategoryDiv = props => {
		return (
			<div className='category-content'>
				<ul>
					{props.obj.map((el, i) => (
						<li onClick={() => handleClick(i)}>
							<div>
								{open[i] ? <IoIosArrowDown /> : <IoIosArrowForward />}
								{el.icon}
								<div>{el.title}</div>
							</div>

							{open[i] ? <UlList arr={el} /> : ''}
						</li>
					))}
				</ul>
			</div>
		)
	}
	let handleClick2 = e => {
		openCat[e] = !openCat[e]
		let arr = [...openCat]
		setOpenCat(arr)
	}

	return (
		<div className='ctegory-top-container'>
			<div className='categorys'>
				<div className='top-chois'>
					<div>
						<div className='category-title' onClick={() => handleClick2(0)}>
							{openCat[0] ? <FaCaretDown /> : <FaCaretRight />}
							{props.obj.name}
						</div>
						{openCat[0] ? <CategoryDiv obj={props.obj.arr} /> : ''}
					</div>
				</div>

				<div className='contacts'>
					<div>
						<div className='category-title' onClick={() => handleClick2(1)}>
							{openCat[1] ? <FaCaretDown /> : <FaCaretRight />}
							contacts
						</div>
						{openCat[1] ? (
							<div className='category-content'>
								<ul>
									<li>
										<MdEmail />
										mrwarkay@gmail.com
									</li>
									<li>
										<MdPhoneEnabled />
										+212 606‑925523
									</li>
								</ul>
							</div>
						) : (
							''
						)}
					</div>
				</div>
			</div>
			<div className='main-container'>
				<div className='topNav'>experience</div>
			</div>
			<div className='second-main-container'>
				<div className='topNav'>experience</div>
			</div>
		</div>
	)
}
