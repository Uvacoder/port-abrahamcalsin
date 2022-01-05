import * as React from 'react'

import Navbar from '~/components/navbar'
import Footer from '~/components/footer'

const MainLayout = (props: any) => {
	const [fullLoad, setFullLoad] = React.useState(false)

	React.useEffect(() => {
		setFullLoad(true)
	}, [])

	const style = {
		transition: 'transform 500ms ease-in-out, opacity 500ms ease-in-out',
	}

	return (
		<div>
			<Navbar />
			<main
				className={`mx-auto max-w-65 pt-13 sm:pt-0 py-3.7 px-2.5 sm:px-5.5  ${
					fullLoad ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
				}`}
				style={style}
			>
				{props.children}
			</main>
			<Footer />
		</div>
	)
}
export default MainLayout
