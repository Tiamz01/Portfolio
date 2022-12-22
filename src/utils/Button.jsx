import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
	return (
		<div>
			<Link to='/contact'>
				<button className=' font-bold leading-4 w-[6rem] h-[2.5rem] text-white  border-blue-500 border-2 capitalize hover:border-slate-300 hover:text-blue-600'>
					Hire Me
				</button>
			</Link>
		</div>
	);
};

export default Button;
