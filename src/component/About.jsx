import React from "react";
import { about } from "../data";
import Title from "../utils/Title.jsx";

const About = () => {
	return (
		<section id='about-me' data-aos='fade-down'>
			<div className=''>
				{about.map((val, i) => (
					<div key={i} className='grid items-center'>
						<h1 className='' data-aos='fade-left'>
							<Title title={val.title} style={{ margin: "1rem 0" }} />
						</h1>

						<p className='max-w-[40rem] text-slate-200 font-poppins text-justify text-lg sm:text-base sm:ml-0 md:text-[1rem] mt-[3rem] box-content px-[2rem] xsm:text-[.8rem] bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-6 rounded-2xl backdrop-blur-sm border border-indigo-500/20'>{val.text}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default About;