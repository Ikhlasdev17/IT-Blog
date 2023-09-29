'use client'
import { Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { ChangeEvent } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import useDarkMode from 'use-dark-mode'

const ThemeSwitch = () => {
	const { setTheme, theme } = useTheme()
	const { value, toggle } = useDarkMode(false)

	return (
		<div>
			<Switch
				defaultSelected={value}
				size='md'
				color='primary'
				thumbIcon={({ isSelected, className }) =>
					isSelected ? (
						<BsSun className={className} />
					) : (
						<BsMoon className={className} />
					)
				}
				onChange={(e: ChangeEvent<any>) => {
					if (e.target.checked) {
						setTheme('dark')
					} else {
						setTheme('light')
					}
					toggle()
				}}
			>
				<p className='xs:hidden md:block'>Change theme</p>
			</Switch>
		</div>
	)
}

export default ThemeSwitch
