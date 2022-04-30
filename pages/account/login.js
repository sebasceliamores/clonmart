import { useRouter } from 'next/router';
import Link from 'next/link'
const Login = () => {
	const { pathname } = useRouter();

	return (
		<section className="container mx-auto pb-52 text-2xl ">
			<div className="container-form">
				<span className="mb-6 text-center font-bold mt-3">Sign in to your Walmart account</span>
				<input className="input-form" placeholder="Email Adress(required)" />
				<Link href="/account/withpassword" passHref>
				<button className="button-blue text-white mt-6 hover:bg-h-color-blue">Continue</button>
				</Link>
				<span className="mt-10 mb-3 text-center font-BogleWeb text-base">
					Don&apos;t have an acoount?
				</span>
			<Link href="/account/signup" passHref>
			<button className="button-blue bg-white border-black hover:shadow-none ">Create account</button>
			</Link>	
			</div>
		</section>
	);
};
export default Login;
