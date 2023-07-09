import Link from 'next/link'

// TODO: Create a Component for the Primary & Secondary Buttons
// TODO: Refactor the code to use Button Component

const CTA = () => {
	return (
		<section className='flex flex-col items-center px-4 pt-24 md:flex-row md:items-center md:px-10 lg:px-40 '>
			<div className='md:w-[40%]'>
				<img
					src='/images/image-founder.webp'
					alt='Workit Founder Image'
					className='object-contain px-12 md:px-0'
				/>
			</div>
			<div className='z-10 flex -translate-y-[15%] flex-col items-center space-y-6 bg-darkPurple px-8 py-12 text-center text-white md:w-[60%] md:-translate-x-[22%] md:translate-y-[50%] md:px-14 md:text-left lg:-translate-x-24 lg:translate-y-32 lg:space-y-8 max-w-full'>
				<div className='space-y-4 md:space-y-6 lg:space-y-8'>
					<h3 className='font-serif text-3xl font-normal md:text-5xl  lg:text-6xl tracking-tighter'>
						Be the first to test
					</h3>
					<p className='text-base/7 font-extralight tracking-wide lg:text-lg/8'>
						Hi, I'm Louis Graham, the founder of the company. Book a demo call
						with me to become a beta tester for our app and kickstart your
						company. Apply for access below and I’ll be in touch to schedule a
						call.
					</p>
				</div>
				<Link
					href={'#'}
					className='border-2 border-eucaplyptus bg-eucaplyptus px-6 py-3 font-bold tracking-tight text-darkPurple hover:bg-inherit hover:text-eucaplyptus md:self-start lg:text-lg'>
					Apply for Access
				</Link>
			</div>
		</section>
	)
}
export default CTA
