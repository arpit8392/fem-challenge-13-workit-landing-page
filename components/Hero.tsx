import Link from 'next/link'

// TODO: Add the background images
// TODO: Add the Hero Icon


const Hero = () => {
	return (
		<div className='bg-darkPurple px-4 py-8 text-white md:px-10 lg:px-40 lg:py-14'>
			<nav className='flex flex-row items-center justify-between'>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='97'
						height='26'
						aria-hidden={true}
						focusable={false}
						viewBox='0 0 97 26'>
						<path
							fill='#FFF'
							d='m10.528 25 4.064-11.2L18.624 25h4.16l6.048-17.472H23.84l-3.392 10.144-3.776-10.144h-4.16L8.704 17.672 5.312 7.528H.352L6.368 25h4.16Zm28.324.384c1.728 0 3.296-.395 4.704-1.184a9.132 9.132 0 0 0 3.376-3.248c.842-1.376 1.264-2.939 1.264-4.688 0-1.77-.422-3.339-1.264-4.704a9.173 9.173 0 0 0-3.376-3.232c-1.408-.79-2.976-1.184-4.704-1.184-1.728 0-3.302.395-4.72 1.184a9.138 9.138 0 0 0-3.392 3.232c-.843 1.365-1.264 2.933-1.264 4.704 0 1.75.42 3.312 1.264 4.688a9.097 9.097 0 0 0 3.392 3.248c1.418.79 2.992 1.184 4.72 1.184Zm0-4.32c-1.302 0-2.363-.448-3.184-1.344-.822-.896-1.232-2.048-1.232-3.456 0-1.387.41-2.533 1.232-3.44.82-.907 1.882-1.36 3.184-1.36 1.3 0 2.357.453 3.168 1.36.81.907 1.216 2.053 1.216 3.44 0 1.408-.406 2.56-1.216 3.456-.811.896-1.867 1.344-3.168 1.344ZM55.367 25v-9.408c0-1.301.363-2.31 1.088-3.024.725-.715 1.675-1.072 2.848-1.072h1.504v-4.16h-1.024c-1.067 0-2.01.197-2.832.592-.821.395-1.456 1.136-1.904 2.224V7.528h-4.48V25h4.8Zm11.908 0v-5.344l1.92-2.112L73.643 25h5.44l-6.304-10.432 6.336-7.04h-5.92l-5.92 6.304V.776h-4.8V25h4.8ZM83.598 4.68V1.16h-1.92v3.52h1.92Zm0 20.32V8.008h-1.92V25h1.92Zm11.012.192c.17 0 .405-.01.704-.032.298-.021.565-.064.8-.128v-1.76a11.29 11.29 0 0 1-1.216.096c-.768 0-1.355-.139-1.76-.416a2.012 2.012 0 0 1-.816-1.088 4.628 4.628 0 0 1-.208-1.376V9.832h3.712V8.008h-3.712V4.04h-1.92v1.824c0 .661-.176 1.184-.528 1.568-.352.384-.838.576-1.456.576h-1.216v1.824h3.2v10.656c0 1.536.378 2.704 1.136 3.504.757.8 1.85 1.2 3.28 1.2Z'
						/>
					</svg>
					<span className='sr-only'>Workit Logo</span>
				</div>
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
