import { FC, ReactElement } from 'react'

interface Props {
	children: ReactElement
}

const Container: FC<Props> = ({ children }) => {
	return <div className='xs:w-[90%] lg:w-[80%] mx-auto'>{children}</div>
}

export default Container
