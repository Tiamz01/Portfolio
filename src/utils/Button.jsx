import Aos from "aos";
import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
	return (
		<div>
			<Link to='/contact'>
				<button className=' font-bold leading-4 w-[10rem] h-[2.5rem] text-white  border-blue-500 border-2 capitalize hover:border-slate-300 hover:text-blue-300/50 animate-pulse hover:animate-none '>
					Hire Me
				</button>
			</Link>
		</div>
	);
};

export default Button;
