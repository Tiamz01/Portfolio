import React from "react";
import { Fade } from "react-reveal";
import { about } from "../data";
import Title from "../utils/Title";

const About = () => {
	return (
		<section id='about-me'>
			<div className=''>
				{about.map((val, i) => (
					<div
						key={i}
						className='grid items-center '
					>
						<h1 className=''>
							<Title
								title={val.title}
								style={{ margin: "1rem  0" }}
							/>
						</h1>
						<Fade
							right
							duration={2000}
							distance='40%'
						>
							<p className='max-w-[40rem] ml-3 text-white font-poppins text-justify text-lg sm:text-base sm:ml-0 md:text-[1rem] mt-[3rem] box-content px-[2rem] xsm:text-[.8rem]'>
								{val.text}
							</p>
						</Fade>
					</div>
				))}
			</div>
		</section>
	);
};

export default About;
