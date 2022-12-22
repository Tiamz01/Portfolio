import React from "react";

const Title = ({ title }) => {
	return (
		<div className=' px-2 py-1 mt-10 '>
			<h3 className='capitalize text-white font-sm font-poppins text-2xl leading-3 md:3xl ml-6 sm:text-2xl xsm:text-xl'>
				{title}
			</h3>
		</div>
	);
};

export default Title;
