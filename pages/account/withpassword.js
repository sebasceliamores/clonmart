import Link from 'next/link';
const WithPassword = () => {
	return (
		<section className="container mx-auto pb-52 text-2xl ">
			<div className="container-form">
				<span className="mb-6 text-center font-bold mt-3">Enter your password</span>
				<div>
					<input
						className="input-form border-none focus:outline-none shadow-none"
						value="example@gmail.com"
					></input>
					<Link href="/account/login" passHref>
						<span className="underline text-base cursor-pointer">Change</span>
					</Link>
				</div>
				<input className="input-form" placeholder="Password" type="password" />
				<span className="mt-10 mb-3 text-right font-BogleWeb text-base">Forgot password?</span>

				<div className="flex justify-left items-center mt-4">
					<input type="checkbox" className="text-pink-600 mr-2 h-5 w-6" />
					<label className="block text-gray-500 font-bold text-sm">
						<span className=" text-sm text-gray-600 leading-snug"> Keep me signed In </span>
					</label>
				</div>

				<p className=" text-sm text-gray-600 mt-4 leading-snug">
					Uncheck if using a public device <span className="font-semibold">Terms of Use</span> and
					<span className="font-semibold underline"> More</span>.
				</p>

				<button className="button-blue text-white mt-6 hover:bg-h-color-blue">Sign In</button>
			</div>
		</section>
	);
};

export default WithPassword;
