import File1 from './../../../images/File1'
import File2 from './../../../images/File2'
import File3 from './../../../images/File3'

import { IoLogoJavascript } from 'react-icons/io5'
import { BiSolidFileTxt } from 'react-icons/bi'

export const obj1 = {
	name: 'personal-info',

	arr: [
		{
			icon: <File1 />,
			title: 'bio',
			branshes: [
				{ name: 'bio.js', to: 'bio', icon: <IoLogoJavascript fill='yellow' /> },
			],
		},
		{
			icon: <File2 />,
			title: 'interests',
			branshes: [
				{
					name: 'interests.js',
					to: 'interests',
					icon: <IoLogoJavascript fill='yellow' />,
				},
			],
		},
		{
			icon: <File3 />,
			title: 'education',
			branshes: [
				{
					to: 'high-school',
					name: 'high-school.txt',
					icon: <BiSolidFileTxt fill='white' />,
				},
				{
					to: 'university',
					name: 'university.txt',
					icon: <BiSolidFileTxt fill='white' />,
				},
			],
		},
	],
}

export const obj2 = {
	name: 'professional-info',

	arr: [
		{
			icon: <File1 />,
			title: 'experience',
			branshes: [
				{
					name: 'experience.js',
					to: 'experience',
					icon: <IoLogoJavascript fill='yellow' />,
				},
			],
		},
		{
			icon: <File2 />,
			title: 'skills',
			branshes: [
				{
					name: 'skills.js',
					to: 'skills',
					icon: <IoLogoJavascript fill='yellow' />,
				},
			],
		},
		{
			icon: <File3 />,
			title: 'certificates',
			branshes: [
				{
					to: 'certificates',
					name: 'certificates.txt',
					icon: <BiSolidFileTxt fill='white' />,
				},
			],
		},
	],
}

export const obj3 = {
	name: 'hobbies',

	arr: [
		{
			icon: <File1 />,
			title: 'music',
			branshes: [
				{
					name: 'music.js',
					to: 'music',
					icon: <IoLogoJavascript fill='yellow' />,
				},
			],
		},
		{
			icon: <File2 />,
			title: 'games',
			branshes: [
				{
					name: 'games.js',
					to: 'games',
					icon: <IoLogoJavascript fill='yellow' />,
				},
			],
		},
		{
			icon: <File3 />,
			title: 'books',
			branshes: [
				{
					to: 'books',
					name: 'books.txt',
					icon: <BiSolidFileTxt fill='white' />,
				},
			],
		},
	],
}
