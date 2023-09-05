import React, { useState, useEffect } from "react";
import { infos } from "../data/index.js";
import Button from "../utils/Button.jsx";
import Socials from "../utils/Socials.jsx";
import AnimatedLetters from "./AnimtedLetter.jsx";
import "./styles.scss";

const Hero = () => {
	const [letterClass, setLetterClass] = useState("text-animate");

	useEffect(() => {
		setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 4000);
	}, []);

	return (
		<>
			<div className='grid items-center  pt-20 px-5 w-full h-[80vh] xsm:-mt-[5rem] '>
				{infos.map((val, i) => (
					<div key={i} className='flex flex-col items-start justify-center main'>
						<h3 className=' text-white text-3xl capitalize xsm:text-lg'>
							<AnimatedLetters letterClass={letterClass} strArray={"hey, i am Ismail".split("")} idx={1} />
						</h3>

						<h1 className=' text-[5rem] font-dancing font-bold font-oswald capitalize  lg:text-[4.3rem] md:text-[2rem]  sm:text=[1rem] leading-1 drop-shadow-md text-blue-400 xsm:text-[1.8rem]'>
							<AnimatedLetters letterClass={letterClass} strArray={"Data Scientist.".split("")} idx={13} />
						</h1>

						<div className=' max-w-lg'>
							<h2 className=' text-white text-xl text-justify font-dance capitalize w-[46rem] md:max-w-[28rem] lg:max-w-[36rem] xsm:lg:max-w-[16rem] sm:text-base sm:font-normal sm:max-w-[20rem]  fadeInLeft  '>{val.text}</h2>
						</div>

						<div className='mt-[2rem] mb-[5rem] '>
							<Button />
						</div>
					</div>
				))}

				<div className=' -mt-[5rem] sm:-mt-[10rem] sm:text-base xsm:text-[.7rem]'>
					<Socials />
				</div>
			</div>{" "}
		</>
	);
};

export default Hero;
