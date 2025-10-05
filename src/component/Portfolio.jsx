import React, { useEffect } from "react";
import { portfolio } from "../data/index.js";
import Title from "../utils/Title.jsx";

const Portfolio = () => {
	return (
		<section id='works' data-aos='fade'>
			<div className='relative lg:mt-10 sm:-mt-[5rem]' data-aos='fade-up'>
				{portfolio?.map((port, i) => (
					<div key={i} className=''>
						<h1 className='ml-6 mb-[2rem] sm:ml-3 sm:text-base font-poppins' data-aos='fade-left'>
							<Title title={port.title} />
						</h1>

						<div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-5 px-5 rounded-xl relative'>
							{port.projects?.map((proj, i) => (
								<div key={i} className=''>
									<div key={i} className='w-full h-full relative group modern-card'>
										<img className='w-full h-[30rem] rounded-xl object-cover bg-cover group-hover:scale-105 transition-transform duration-500' src={proj.img} alt='project-cover-image' />
										<div className='absolute bottom-[0] w-full h-full group-hover:bg-gradient-to-br from-indigo-500/80 to-purple-600/80 rounded-xl z-20 transition-all duration-500'></div>
										<div className='flex items-start flex-col gap-3 justify-center px-3 absolute top-[15rem] left-[1rem] lg:left-[0] sm:left-[1rem] xsm:left-[0.5rem] opacity-0 group-hover:opacity-100 z-40 text-center transition-opacity duration-500'>
											<h3 className='text-slate-100 text-2xl font-poppins capitalize font-medium'>
												{proj.title}
											</h3>
											<p className='font-semibold text-base max-w-[20rem] leading-7 text-justify text-slate-200'>{proj.text}</p>
											<a href={proj.url} target="_blank" rel="noreferrer">
												<button type='button' className='border-2 border-white p-2 cursor-pointer capitalize text-white text-xl hover:bg-white hover:text-indigo-900 bg-indigo-600/50 backdrop-blur-sm rounded-lg transition-all duration-300 transform hover:scale-105'>
													{proj.btn}
												</button>
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Portfolio;