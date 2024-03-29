import React from "react";

import { FaCss3, FaDatabase, FaFileExcel, FaHtml5, FaJsSquare, FaPython } from "react-icons/fa";
import Title from "../utils/Title";

const Skills = () => {
	return (
		<div className='mt-7' data-aos='fade-up'>
			<div className='header text-white'>
				<Title title={Skills} />
			</div>
			<div className=' flex flex-row  items-center justify-center gap-[8rem] lg:gap-[7rem] lg:px-5 md:gap-[4rem] sm:gap-6 xsm:gap-3 md:px-5 sm:text-5xl text-slate-500 text-7xl w-full h-auto bg-slate-200 py-8  hover:bg-cyan-900'>
				<FaHtml5 color='#F16529' />
				<FaCss3 color='#F16529' />
				<FaJsSquare color=' #F0DB4F' />
				<FaPython color='#4B8BBE' />
				<FaFileExcel color='#1D6F42' />
				<FaDatabase color='#646464' />
			</div>
		</div>
	);
};

export default Skills;
