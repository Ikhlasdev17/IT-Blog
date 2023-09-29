import Container from '@/components/container'
import { RootState } from '@/store/store'
import { FC, ReactElement } from 'react'
import { useSelector } from 'react-redux'
import Header from './header'
import Sidebar from './sidebar'

interface LayoutProps {
	children: ReactElement
}

const Layout: FC<LayoutProps> = ({ children }) => {
	const { isOpen } = useSelector((state: RootState) => state.sidebar)

	console.log(isOpen)

	return (
		<div>
			<Header />
			<Container>
				<div className='flex gap-4 my-6 xs:flex-col lg:flex-row items-start'>
					<div className='xs:w-full lg:w-[70%]'>{children}</div>
					<div
						className={`xs:w-full lg:w-[30%] xs:fixed lg:sticky dark:bg-black bg-white xs:h-screen lg:h-auto lg:border-[1px] dark:border-gray-700 border-gray-200 right-0 xs:top-[90px] lg:top-[110px] rounded-md px-3  duration-200 ${
							isOpen ? 'left-0' : 'left-[100%]'
						} transition-left`}
					>
						<Sidebar />
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Layout
