import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_f4t5cas",
				"template_5kwrrtc",
				form.current,
				"93QY13Zf4V-aPpkSR"
			)
			.then(
				(result) => {
					alert("message sent successfully");
					window.location.reload(false);
				},
				(error) => {
					alert("error sendinf message");
				}
			);
		console.log("sent");
	};

	return (
		<div className='h-[100vh] w-full'>
			<div className='flex items-center justify-center h-full flex-col relative group'>
				<h1
					className='text-clip md:text-[1.4rem] sm:text-[1.2rem] text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-8'
					data-aos='fade-right'
				>
					Let discuss your project
				</h1>
				<form
					ref={form}
					onSubmit={sendEmail}
					className='flex flex-col w-[40rem] max-w-[25rem] gap-4 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-[2rem] rounded-2xl md:w-[30rem] sm:w-[20rem] xsm:w-[10rem] backdrop-blur-sm border border-indigo-500/20'
				>
					<div className='flex gap-3 w-full'>
						<input
							type='text'
							required
							name='name'
							placeholder='First Name'
							className='h-[2.5rem] sm:h-[2.5rem] p-3 rounded-lg outline-none text-slate-200 placeholder-slate-400 border-none shadow-md shadow-indigo-500/10 w-[50%] bg-indigo-900/20 backdrop-blur-sm'
							data-aos='fade-right'
							data-aos-delay='1000'
						/>
						<input
							type='text'
							required
							name='name'
							placeholder='Last Name'
							className='h-[2.5rem] text-bold sm:h-[2.5rem] p-3 rounded-lg outline-none text-slate-200 placeholder-slate-400 border-none shadow-md shadow-indigo-500/10 w-[50%] bg-indigo-900/20 backdrop-blur-sm'
							data-aos='fade-left'
							data-aos-offset='100'
							data-aos-delay='20'
						/>
					</div>
					<input
						type='email'
						name='email'
						placeholder='Email'
						required
						className='h-[2.5rem] text-bold sm:h-[2.5rem] p-3 rounded-lg outline-none text-slate-200 placeholder-slate-400 border-none shadow-md shadow-indigo-500/10 bg-indigo-900/20 backdrop-blur-sm'
						data-aos='fade-up'
						data-aos-offset='400'
						data-aos-duration='200'
					/>
					<input
						type='text'
						name='subject'
						placeholder='Subject'
						required
						className='h-[2.5rem] sm:h-[2.5rem] p-3 rounded-lg outline-none text-bold text-slate-200 placeholder-slate-400 border-none shadow-md shadow-indigo-500/10 bg-indigo-900/20 backdrop-blur-sm'
						data-aos='fade-up'
						data-aos-offset='200'
						data-aos-duration='1500'
					/>
					<textarea
						name='message'
						id=''
						rows='5'
						cols='20'
						placeholder='Message'
						required
						className='p-3 rounded-lg outline-none text-slate-200 placeholder-slate-400 border-none shadow-md shadow-indigo-500/10 h-[10rem] bg-indigo-900/20 backdrop-blur-sm'
						data-aos='fade-up'
						data-aos-offset='200'
						data-aos-duration='1800'
					/>

					<button
						type='submit'
						className='bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 h-[2.5rem] text-lg md:text-base text-white mx-[8rem] md:mx-[7rem] sm:mx-[6rem] xsm:mx-[2rem] sm:text-base rounded-lg shadow-lg mt-2 uppercase relative px-4 hover:text-slate-200 btn transition-all duration-300 transform hover:scale-105'
					>
						Send{" "}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;