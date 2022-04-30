import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [isHoverMyItems, setIsHoverMyItems] = useState(false);
	const [isHoverAccount, setIsHoverAccount] = useState(false);

	return (
		<div>
			<Head>
				<title>ClonMart</title>
				<meta name="description" content="Clon Walmart Project" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="bg-sky-600 w-full h-20 sticky z-1 top-0 grid grid-flow-col auto-cols-auto gap-1 content-center flex items-center p-6">
				<div className="text-white text-3xl">Clonmart</div>

				<div className="hidden lg:block">
					<button className=" flex items-center justify-center text-white hover:bg-sky-700 rounded-full w-36 h-10">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 m-1  hover:fill-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="white"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
							/>
						</svg>
						<p className="font-semibold">Departments</p>
					</button>
				</div>

				<div className="hidden lg:block">
					<button className=" flex items-center justify-center text-white hover:bg-sky-700 rounded-full w-28 h-10">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 m-1 hover:fill-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
							/>
						</svg>
						<p className="font-semibold">Services</p>
					</button>
				</div>
				<div className=" relative mr-6 2xl:w-[70rem] xl:w-96 lg:w-60">
					<input
						type="text"
						placeholder="Search everything"
						className="rounded-full border-none border-0 p-2 h-10 w-full"
					/>
					<button className="bg-yellow-400 h-8 rounded-full absolute top-1 right-1  flex items-center justify-center ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 m-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
				</div>

				<div
					onMouseEnter={() => setIsHoverMyItems(true)}
					className="relative hidden lg:block"
				>
					<button className="flex items-center justify-center text-white hover:bg-sky-700 rounded-full w-32 h-10">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 m-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
							/>
						</svg>
						<div className="flex flex-col items-start">
							<span className="text-xs">Reorder</span>
							<p className="font-semibold">My Items</p>
						</div>
					</button>

					{isHoverMyItems && (
						<div
							onMouseLeave={() => setIsHoverMyItems(false)}
							className="absolute mt-[20px] bg-white shadow w-36 rounded-b-lg"
						>
							<ul className="py-0 text-sm text-gray-500 px-6">
								<li className="flex  items-center mb-2 mt-4 hover:underline">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
										/>
									</svg>
									<a href="#" className="block px-2 py-2">
										Reorder
									</a>
								</li>
								<li className="flex items-center mb-2 hover:underline">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
										/>
									</svg>
									<a href="#" className="block px-2 py-2">
										Lists
									</a>
								</li>
								<li className="flex  items-center mb-2 hover:underline">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
										/>
									</svg>
									<a href="#" className="block px-2 py-2">
										Registries
									</a>
								</li>
							</ul>
						</div>
					)}
				</div>

				<div
					onMouseEnter={() => setIsHoverAccount(true)}
					className="relative hidden lg:block"
				>
					<button className="flex items-center justify-center text-white hover:bg-sky-700 rounded-full w-32 h-10">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 m-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
						<div className="flex flex-col items-start">
							<span className="text-xs">Sign in</span>
							<p className="font-semibold">Account</p>
						</div>
					</button>

					{isHoverAccount && (
						<div
							onMouseLeave={() => setIsHoverAccount(false)}
							className="absolute  mt-[20px] bg-white shadow w-40 rounded-b-lg"
						>
							<ul className="py-0 text-sm text-gray-500 px-6">
								<li className="flex  items-center mb-2 mt-4 ">
									<button className="bg-sky-600 w-36 h-8 text-xs text-white font-semibold rounded-full hover:bg-sky-700">
										Sign in
									</button>
								</li>
								<li className="flex items-center mb-2 ">
									<button className="bg-white w-36 h-8 text-xs text-black font-semibold border-solid border-2 border-zinc-600 rounded-full hover:border-zinc-900">
										Create an account
									</button>
								</li>
								<li className="flex  items-center mb-2 hover:underline">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
										/>
									</svg>
									<a href="#" className="block px-2 py-2 text-xs">
										Purchase History
									</a>
								</li>
							</ul>
						</div>
					)}
				</div>

				<div>
					<button className="relative flex flex-col items-center text-white rounded-full leading-none p-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
						<span className="absolute text-center top-0 right-0 w-4 text-xs text-black leading-none bg-yellow-400 border-solid border-2 border-yellow-600 rounded-full">
							0
						</span>
						<p className="text-xs leading-none">$0.00</p>
					</button>
				</div>
			</header>
			<section className="bg-blue-900 h-8 text-white px-4  flex">
				<button className="text-sm hover:underline flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-5 mr-1"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/>
					</svg>
					Update store
				</button>
				<span className="mx-2 text-xs pt-2">|</span>
				<button className="text-sm hover:underline flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-5 mr-1"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
					Update location
				</button>
			</section>

			<main className="h-screen">
				<h1 className="text-3xl font-bold underline text-red-50">
					Hello world!
				</h1>
			</main>

			<footer className="lg:h-44 bg-white lg:bg-blue-900 py-6 text-gray-700 lg:text-white border">
				<ul className="px-6 py-4  text-xs lg:text-sm flex flex-wrap justify-center">
					<li className="mr-6">All Departments</li>
					<li className="mr-6">Store Directory</li>
					<li className="mr-6">Careers</li>
					<li className="mr-6">OurCompany</li>
					<li className="mr-6">Sell on Walmart.com</li>
					<li className="mr-6">Help</li>
					<li className="mr-6">COVID-19 Vaccine Scheduler</li>
					<li className="mr-6">Product Recalls</li>
					<li className="mr-6">Accsessibility</li>
					<li className="mr-6">Tax Exempt Program</li>
					<li className="mr-6">Get the Walmart App</li>
					<li className="mr-6">Sign-up for Email</li>
					<li className="mr-6">Terms of Use</li>
					<li className="mr-6">Privacy & Security</li>
					<li className="mr-6">CA Privacy Rights</li>
					<li className="mr-6">California Supply Chain Act</li>
					<li className="mr-6">Do Not Sell My Personal Information</li>
					<li className="mr-6">Request My Personal Information</li>
				</ul>
				<div className="text-xs text-center  pt-3 ">
					© 2022 Walmart. All Rights Reserved.
				</div>
			</footer>
		</div>
	);
}
