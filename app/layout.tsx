import Footer from '@/components/Footer'
import './globals.css'
import { Manrope, Fraunces } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })

export const metadata = {
	title: 'Workit Landing Page',
	description:
		'Frontend Mentor Challenge | Workit Landing Page | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${manrope.variable} ${fraunces.variable} font-sans `}>
				{children}
				<Footer />
			</body>
		</html>
	)
}
