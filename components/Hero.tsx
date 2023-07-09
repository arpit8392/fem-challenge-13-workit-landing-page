import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo-light.svg'

// TODO: Add the background images
// TODO: Add the Hero Icon

const Hero = () => {
	return (
		<div className='bg-darkPurple px-4 py-8 text-white md:px-10 lg:px-40 lg:py-14'>
			<nav className='flex flex-row items-center justify-between'>
				<Image src={Logo} alt='Workit Logo' className='w-auto object-contain' />

				<Link
					href={'#'}
					className='text-base/8 font-bold underline decoration-eucaplyptus decoration-2 underline-offset-8 hover:text-eucaplyptus lg:text-lg lg:decoration-4'>
					Apply for access
				</Link>
			</nav>
			<div className='space-y-18 relative flex flex-col flex-wrap items-center justify-center py-16 text-center md:py-14 lg:py-16'>
				<div className='flex flex-col items-center space-y-10 md:max-w-lg lg:max-w-xl'>
					<h1 className='font-serif text-5xl font-medium md:text-6xl lg:text-7xl'>
						Data{' '}
						<span className='underline decoration-eucaplyptus  underline-offset-8'>
							tailored
						</span>{' '}
						to your needs.
					</h1>
					<Link
						href={'#'}
						className='border-2 border-eucaplyptus bg-eucaplyptus px-6 py-3 font-bold tracking-tight text-darkPurple hover:bg-inherit hover:text-eucaplyptus lg:text-lg'>
						Learn more
					</Link>
				</div>
			</div>
		</div>
	)
}
export default Hero
