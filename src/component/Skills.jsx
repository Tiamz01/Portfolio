import React from "react";

import { FaCss3, FaDatabase, FaFileExcel, FaHtml5, FaJsSquare, FaPython } from "react-icons/fa";
import Title from "../utils/Title";

const Skills = () => {
	return (
		<div className='mt-7' data-aos='fade-up'>
			<div className='header text-white'>
				<Title title="Skills" />
			</div>
			<div className='flex flex-row items-center justify-center gap-[8rem] lg:gap-[7rem] lg:px-5 md:gap-[4rem] sm:gap-6 xsm:gap-3 md:px-5 sm:text-5xl text-slate-200 text-7xl w-full h-auto bg-gradient-to-r from-indigo-900/30 to-purple-900/30 py-8 rounded-2xl backdrop-blur-sm border border-indigo-500/20 hover:from-indigo-800/40 hover:to-purple-800/40 transition-all duration-500'>
				<div className='transform hover:scale-110 transition-transform duration-300'>
					<FaHtml5 className='text-orange-500 drop-shadow-[0_0_5px_rgba(249,115,22,0.5)]' />
				</div>
				<div className='transform hover:scale-110 transition-transform duration-300'>
					<FaCss3 className='text-blue-500 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]' />
				</div>
				<div className='transform hover:scale-110 transition-transform duration-300'>
					<FaJsSquare className='text-yellow-400 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]' />
				</div>
				<div className='transform hover:scale-110 transition-transform duration-300'>
					<FaPython className='text-blue-600 drop-shadow-[0_0_5px_rgba(37,99,235,0.5)]' />
				</div>
				<div className='transform hover:scale-110 transition-transform duration-300'>
					<FaFileExcel className='text-green-600 drop-shadow-[0_0_5px_rgba(22,163,74,0.5)]' />
				</div>
				<div className='transform hover:scale-110 transition-transform duration-300'>
					<FaDatabase className='text-gray-400 drop-shadow-[0_0_5px_rgba(156,163,175,0.5)]' />
				</div>
			</div>
		</div>
	);
};

export default Skills;