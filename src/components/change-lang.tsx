import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@nextui-org/react'
import { MdOutlineLanguage } from 'react-icons/md'

const ChangeLang = () => {
	return (
		<div className='xs:hidden md:block'>
			<Dropdown>
				<DropdownTrigger>
					<Button variant='bordered' startContent={<MdOutlineLanguage />}>
						EN
					</Button>
				</DropdownTrigger>
				<DropdownMenu>
					<DropdownItem>EN</DropdownItem>
					<DropdownItem>RU</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	)
}

export default ChangeLang
