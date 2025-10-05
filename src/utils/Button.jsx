import Aos from "aos";
import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
	return (
		<div>
			<Link to='/contact'>
				<button className='font-bold leading-4 w-[10rem] h-[2.5rem] text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 capitalize rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105'>
					Hire Me
				</button>
			</Link>
		</div>
	);
};

export default Button;