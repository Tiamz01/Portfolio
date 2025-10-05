import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaMoon } from "react-icons/fa";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const openMenu = () => {
		setToggle(!toggle);
	};
	const closeMenu = () => {
		setToggle(false);
	};

	return (
		<div className='w-full h-[7rem] relative'>
			<div className={`flex justify-between items-center px-[2rem] pt-[2rem] relative`}>
				<HashLink to='#home'>
					<h2 className='text-3xl font-poppins md:text-2xl tiamz'>Tiamz.</h2>
				</HashLink>

				<div className='flex items-center gap-7 -ml-[55rem]'>
					<button name='Open' onClick={openMenu} className={"w-[7rem] h-[3rem] bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-lg text-white font-poppins font-medium leading-3 relative shadow xsm:text-base shadow-indigo-500/30 md:w-[5.5rem] md:h-[2rem] backdrop-blur-sm border border-indigo-500/20 hover:from-indigo-600/40 hover:to-purple-600/40 transition-all duration-300"}>
						{toggle ? "Close" : "Menu"} {toggle ? <FaAngleUp className='absolute top-[1rem] left-[5rem] md:left-[4.2rem] md:top-2' /> : <FaAngleDown className='absolute top-[1rem] left-[5rem] md:left-[4.2rem] md:top-2' />}
					</button>

					{/* <div className=''>
						<FaMoon />
					</div> */}
				</div>
			</div>
			{toggle && (
				<ul className='w-[14rem] h-[16rem] px-2 font-poppins flex items-center flex-col justify-center gap-4 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 text-center absolute right-10 top-[6rem] rounded-2xl shadow-lg shadow-indigo-500/30 opacity-1 md:w-[10rem] md:h-[12rem] md:text-[1rem] z-30 fadeInUp backdrop-blur-sm border border-indigo-500/30'>
					<li className='menuItem' onClick={closeMenu}>
						<HashLink to='#works' smooth className='text-white'>
							Portfolio
						</HashLink>
					</li>
					<li className='menuItem' onClick={closeMenu}>
						<HashLink to='#about-me' smooth className='text-white'>
							About
						</HashLink>
					</li>
					<li className='menuItem' onClick={closeMenu}>
						<Link to='./Data_Resume.pdf' download='Tiamz Resume' target='_blank' rel='noreferrer' className='text-white'>
							Resume
						</Link>
					</li>
					<li className='menuItem' onClick={closeMenu}>
						<Link to='/contact' className='text-white'>Contact</Link>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Navbar;