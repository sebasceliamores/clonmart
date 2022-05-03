import Layout from "../components/Layout";
import HeaderLogo from "../components/HeaderLogo";
import "../styles/globals.css";
import { useRouter } from "next/router";
import FooterLogo from "../components/FooterLogo";
import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
	const { pathname } = useRouter();

	return (
		<>
			<Head>
				<title>ClonMart</title>
				<meta name="description" content="Clon Walmart Project" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{pathname === "/account/login" ||
			pathname === "/account/signup" ||
			pathname === "/account/withpassword" ? (
				<HeaderLogo />
			) : null}
			<Layout>
				<Component {...pageProps} />
			</Layout>
			{pathname === "/account/login" ||
			pathname === "/account/signup" ||
			pathname === "/account/withpassword" ? (
				<FooterLogo />
			) : null}
		</>
	);
}

export default MyApp;
