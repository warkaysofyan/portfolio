import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom'
import RootLayout from './pages/layoouts/RootLayout'

// importin pages
import Home from './pages/routes/home/Home'
import Contact from './pages/routes/contact/Contact'
import FirstBar from './pages/layoouts/FirstBar'
import Progect from './pages/routes/progects/Progects'

import SecondBar from './pages/layoouts/SecondBar.js'

import { obj1, obj2, obj3 } from './pages/routes/about/objects.js'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path='about' element={<FirstBar />}>
				<Route index element={<SecondBar obj={obj1} />} />
				<Route path='professional-info' element={<SecondBar obj={obj2} />} />
				<Route path='personal-info' element={<SecondBar obj={obj1} />} />
				<Route path='hobbies' element={<SecondBar obj={obj3} />} />
			</Route>
			<Route path='progects' element={<Progect />} />
			<Route path='contact' element={<Contact />} />
		</Route>
	)
)

function App() {
	return <RouterProvider router={router} />
}

export default App
