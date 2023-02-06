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
		<div className=' w-full h-[7rem]  relative'>
			<div className={`flex justify-between items-center px-[2rem] pt-[2rem] relative`}>
				<HashLink to='#home'>
					<h2 className=' text-3xl font-poppins  md:text-2xl tiamz '>Tiamz.</h2>
				</HashLink>

				<div className='flex items-center  gap-7  -ml-[55rem]'>
					<button name='Open' onClick={openMenu} className={"w-[7rem] h-[3rem] bg-slate-400/50 rounded-lg text-white font-poppins font-medium leading-3 relative shadow xsm:text-base  shadow-slate-400 md:w-[5.5rem] md:h-[2rem]"}>
						{toggle ? "Close" : "Menu"} {toggle ? <FaAngleUp className='absolute top-[1rem] left-[5rem] md:left-[4.2rem] md:top-2 ' /> : <FaAngleDown className='absolute top-[1rem] left-[5rem] md:left-[4.2rem] md:top-2' />}
					</button>

					{/* <div className=''>
						<FaMoon />
					</div> */}
				</div>
			</div>
			{toggle && (
				<ul className=' w-[14rem] h-[16rem] px-2  font-poppins flex items-center flex-col justify-center gap-4   bg-blue-100 text-center absolute right-10 top-[6rem] rounded-2xl shadow-md shadow-slate-300 opacity-1  md:w-[10rem] md:h-[12rem] md:text-[1rem] z-30 fadeInUp'>
					<li className='menuItem' onClick={closeMenu}>
						<HashLink to='#works' smooth>
							Portfolio
						</HashLink>
					</li>
					<li className='menuItem' onClick={closeMenu}>
						<HashLink to='#about-me' smooth>
							About
						</HashLink>
					</li>
					<li className='menuItem' onClick={closeMenu}>
						<Link to='./resume.pdf' download='true' target='_blank' rel='noreferrer'>
							Resume
						</Link>
					</li>
					<li className='menuItem' onClick={closeMenu}>
						<Link to='/contact'>Contact Mee</Link>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Navbar;
