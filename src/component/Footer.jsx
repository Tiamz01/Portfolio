import React from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import Socials from "../utils/Socials";

const Footer = () => {
	return (
		<>
			<div className='mt-5  p-2 lg:p-0'>
				<div>
					<h1 className='text-2xl text-bold ml-6 mb-[3rem] text-white xsm:text-xl'>
						Contact.
					</h1>
					<div className='mt-10 ml-6 mb-[3rem]'>
						<h1 className='text-3xl  lg:text-3xl sm:text-xl  text-bold text-white xsm:text-lg'>
							LET&apos;S WORK
						</h1>
						<h1 className='text-6xl md:text-6xl lg:text-6xl sm:text-4xl text-bold text-blue-400 xsm:text-3xl '>
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
			<h1 className='text-sm text-bold mt-2 lg:mt-10 p-2 lg:p-0 text-white ml-6 '>
				Made With ❤ by{" "}
				<a className='underline underline-offset-3'>Ismail Tiamiyu [Tiamz]</a>
			</h1>
		</>
	);
};

export default Footer;
