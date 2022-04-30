import Link from 'next/link';
const HeaderLogo = () => (
	<header className="mt-4">
		<Link href="/home" passHref>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-20 w-20 mx-auto font-semibold cursor-pointer"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
				/>
			</svg>
		</Link>
	</header>
);
export default HeaderLogo;
