import ChangeLang from '@/components/change-lang'
import Container from '@/components/container'
import ThemeSwitch from '@/components/theme-switch'
import { toggleSidebar } from '@/store/sidebar/sidebar.slice'
import {
	Avatar,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Input,
} from '@nextui-org/react'
import Link from 'next/link'
import { BiGridAlt } from 'react-icons/bi'
import { BsLock, BsSearch } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { HiOutlineCog6Tooth } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
const Header = () => {
	const dispatch = useDispatch()

	return (
		<header className='py-6 border-b-[1px] dark:border-b-gray-700 border-b-gray-200 sticky top-0 dark:bg-black bg-white z-50'>
			<Container>
				<div className='flex justify-between items-center'>
					<div className='flex gap-4 items-center'>
						<Link href={'/'} className='text-3xl font-bold'>
							<h1>
								<span className='text-indigo-500'>IT</span>-Blog
							</h1>
						</Link>

						<label className='xs:hidden md:block'>
							<Input
								startContent={
									<span className='text-gray-300'>
										<BsSearch />
									</span>
								}
								placeholder='Search...'
							/>
						</label>
					</div>

					<div className='flex gap-4 items-center'>
						<span
							onClick={() => {
								dispatch(toggleSidebar())
							}}
							className='px-2 py-2 text-xl rounded-md cursor-pointer bg-slate-200 dark:bg-gray-900'
						>
							<BiGridAlt />
						</span>
						<ChangeLang />
						<ThemeSwitch />
						<Dropdown>
							<DropdownTrigger>
								<Avatar
									className='cursor-pointer'
									isBordered
									color='primary'
									src='https://miro.medium.com/v2/resize:fill:64:64/0*TrCVdFSzwqdsYec6'
								/>
							</DropdownTrigger>
							<DropdownMenu>
								<DropdownItem startContent={<FiUser />}>Profile</DropdownItem>
								<DropdownItem startContent={<HiOutlineCog6Tooth />}>
									Settings
								</DropdownItem>
								<DropdownItem startContent={<BsLock />}>Logout</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
