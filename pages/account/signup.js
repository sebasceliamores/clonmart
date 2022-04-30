import Link from 'next/link';
const Signup = () => {
	return (
		<section className="container mx-auto pb-52 text-2xl">
			<div className="container-form">
				<span className="mb-6 text-center font-bold mt-3">Create your Walmart account</span>
				<input className="input-form" placeholder="First name" />
				<input className="input-form" placeholder="Last name" />
				<input className="input-form" placeholder="Email Adress" />
				<input className="input-form" placeholder="Create a password" password />

				<div className="flex justify-left items-center mt-4">
					<input type="checkbox" className="text-pink-600 mr-2 h-5 w-6" />
					<label className="block text-gray-500 font-bold text-sm">
						<span className=" text-sm text-gray-600 leading-snug"> Keep me signed In </span>
					</label>
				</div>
				<p className="m-r font-BogleWeb1 text-sm mt-2">Uncheck If using a public device. More</p>
				<div className="flex justify-left items-center mt-4">
					<input type="checkbox" className="text-pink-600 mr-2 h-5 w-6" />
					<label className="block text-gray-500 font-bold text-sm">
						<span className=" text-sm text-gray-600 leading-snug">
							Send me emails about new arrivals, hot items, daily savings, & more.
						</span>
					</label>
				</div>
				<p className=" text-sm text-gray-600 mt-4 leading-snug">
					By clicking Create Account, you acknowledge you have read and agreed to our <span className='font-semibold'>Terms of Use</span> and 
					<span className='font-semibold'> Privacy Policy</span>.
				</p>

				<button className="button-blue  hover:shadow-none mt-4 text-white hover:bg-h-color-blue">
					Create account
				</button>
				<span className="mt-10 mb-3 text-center font-BogleWeb text-base">Already have an account?</span>
				<Link href="/account/login" passHref>
					<button className="button-blue bg-white border-black hover:shadow-none ">Sign In</button>
				</Link>
			</div>
		</section>
	);
};

export default Signup;
