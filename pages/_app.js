import Layout from '../components/Layout';
import HeaderLogo from '../components/HeaderLogo';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import FooterLogo from '../components/FooterLogo';
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
	const { pathname } = useRouter();
	return (
		<>
			{pathname === '/account/login' ||
			pathname === '/account/signup' ||
			pathname === '/account/withpassword' ? (
				<HeaderLogo />
			) : null}
			<Layout>
				<Component {...pageProps} />
			</Layout>
			{pathname === '/account/login' ||
			pathname === '/account/signup' ||
			pathname === '/account/withpassword' ? (
				<FooterLogo />
			) : null}
		</>
	);
}

export default MyApp;
