import { Fade } from "react-reveal";
import React from "react";
import { portfolio } from "../data/index.js";
import Title from "../utils/Title.jsx";
const Portfolio = () => {
	return (
		<section id='works'>
			<div className='relative lg:mt-10 sm:-mt-[5rem] '>
				{portfolio?.map((port, i) => (
					<Fade>
						<div
							key={i}
							className=''
						>
							<h1 className='ml-6 mb-[2rem] sm:ml-3 sm:text-base font-poppins '>
								<Title title={port.title} />
							</h1>
							<Fade
								bottom
								distance='40%'
								duration={2000}
							>
								<div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-5 px-5 rounded-xl relative  '>
									{port.projects?.map((proj, i) => (
										<div
											key={i}
											className=''
										>
											<div
												key={i}
												className='w-full  h-full relative group '
											>
												<img
													className='w-full h-[30rem] rounded-xl object-cover bg-cover group-hover:scale-y-115 big'
													src={proj.img}
													alt='project-cover-image'
												/>
												<div className=' absolute bottom-[0] w-full h-full  group-hover:bg-gradient-to-br from-blue-400 to-amber-200/40 rounded-lg z-20 '>
													<div className=' flex items-start flex-col gap-3 justify-center px-3 absolute top-[15rem] left-[1rem] lg:left-[0] sm:left-[1rem]  xsm:left-[0.5rem] opacity-0 group-hover:opacity-100 z-40 text-center '>
														<h3
															className=' text-[#2f2f65] 
												text-2xl font-poppins capitalize font-medium '
														>
															{proj.title}
														</h3>
														<p className=' text-white font-semibold text-base max-w-[20rem]  leading-7 text-justify '>
															{proj.text}
														</p>
														<a href={proj.url}>
															<button
																type='button'
																className=' border-2 p-2 cursor-pointer capitalize text-blue-900 text-lg hover:border-[#5456aa] group-hover:text-[#e9f1e8]'
															>
																{proj.btn}
															</button>
														</a>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</Fade>
						</div>
					</Fade>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
