import React from "react";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Socials = () => {
	return (
		<div className='w-[20rem] sm:text-sm '>
			<div className=' flex items-center gap-6 text-white  '>
				<div className=' cursor-pointer'>
					<a
						to='https://www.linkedin.com/in/tiamz-is/'
						className='brightness-[15] hover:brightness-[3]'
					>
						<FaLinkedinIn
							size={30}
							style={{ color: "#0a66c2" }}
						/>
					</a>
				</div>

				<div className=' cursor-pointer'>
					<a
						href=''
						className='brightness-[15] hover:brightness-[3]'
					>
						<FaInstagram
							size={30}
							style={{ color: "#c32aa3" }}
						/>
					</a>
				</div>

				<div className=' cursor-pointer'>
					<a
						href=''
						className='brightness-[15] hover:brightness-[3]'
					>
						<FaTwitter
							size={30}
							style={{ color: "#1da1f2" }}
						/>
					</a>
				</div>

				<div className=' cursor-pointer'>
					<a
						href=''
						className='brightness-[15] hover:brightness-[3]'
					>
						<FaGithub
							size={30}
							style={{ color: "#fffff" }}
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
