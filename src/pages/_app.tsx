import Layout from '@/layout/layout'
import { store } from '@/store/store'
import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<NextUIProvider>
				<NextThemeProvider attribute='class' defaultTheme='light'>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</NextThemeProvider>
			</NextUIProvider>
		</Provider>
	)
}
