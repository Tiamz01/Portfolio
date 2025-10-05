import React from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button.jsx";
import Socials from "../utils/Socials.jsx";

const Footer = () => {
	return (
		<section data-aos='fade-left'>
			<div className='mt-5 p-2 lg:p-0'>
				<div>
					<h1
						className='text-2xl text-bold ml-6 mb-[3rem] text-slate-200 xsm:text-xl'
						data-aos='fade-right'
					>
						Contact.
					</h1>
					<div className='mt-10 ml-6 mb-[3rem]'>
						<h1 className='text-3xl lg:text-3xl sm:text-xl text-bold text-slate-200 xsm:text-lg'>
							LET&apos;S WORK
						</h1>
						<h1 className='text-6xl md:text-6xl lg:text-6xl sm:text-4xl text-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 xsm:text-3xl'>
							TOGETHER
						</h1>
						<div className='mt-5'>
							<Button />
						</div>
						<div className='mt-10'>
							<Socials size={10} />
						</div>
					</div>
				</div>
			</div>

			<h1 className='text-sm text-bold mt-2 lg:mt-10 p-2 lg:p-0 text-slate-300 ml-6'>
				Made With ❤ by{" "}
				<Link
					to=''
					className='underline underline-offset-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500'
				>
					Ismail Tiamiyu [Tiamz]
				</Link>
			</h1>
		</section>
	);
};

export default Footer;