import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Socials = () => {
	return (
		<div className='w-[20rem] sm:text-sm ' data-aos='slide-in-right'>
			<div className=' flex items-center gap-6 text-white  '>
				<div className=' cursor-pointer'>
					<a href='https://www.linkedin.com/in/tiamz-is/' className='brightness-[15] hover:brightness-[3]'>
						<FaLinkedinIn size={30} style={{ color: "#0a66c2" }} />
					</a>
				</div>

				<div className=' cursor-pointer'>
					<a href='https://twitter.com/TiamzAbby' className='brightness-[15] hover:brightness-[3]'>
						<FaTwitter size={30} style={{ color: "#1da1f2" }} />
					</a>
				</div>

				<div className=' cursor-pointer'>
					<a href='https://github.com/Tiamz01' className='brightness-[15] hover:brightness-[3]'>
						<FaGithub size={30} style={{ color: "#fffff" }} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
