import { features } from '@/data'

// TODO: Fix the Horizontal Center Layout Issue with Numbers
// TODO: Add Rounded Curve at the bottom
// TODO: Adjust the top layout to accomodate the hero image
// TODO: Refactor the code to FeatureItem Component

const Features = () => {
	return (
		<ul className='flex flex-col items-center space-y-10 bg-ghostWhite px-4 py-16 md:space-y-12 md:px-24 md:py-14 lg:flex-row lg:space-x-6 lg:space-y-0 lg:px-40 lg:py-24 '>
			{features.map(({ id, title, description }) => (
				<li
					key={id}
					className='flex flex-col items-center space-y-6 text-center md:flex-row md:space-x-8 md:text-left lg:flex-col lg:text-center'>
					<div className='flex h-8 w-8 justify-center rounded-full border-[1px] border-davysGrey '>
						<span className='font-serif text-xl text-darkPurple'>{id}</span>
					</div>
					<div className='space-y-4'>
						<h2 className='font-serif text-2xl font-medium text-darkPurple'>
							{title}
						</h2>
						<p className='max-w-sm tracking-wide text-davysGrey md:max-w-lg'>
							{description}
						</p>
					</div>
				</li>
			))}
		</ul>
	)
}
export default Features
