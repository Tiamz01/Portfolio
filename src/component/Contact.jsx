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
		<div className='h-[100vh] w-full '>
			<div className='  flex items-center justify-center h-full flex-col relative group'>
				<h1
					className='text-clip md:text-[1.4rem] sm:text-[1.2rem]'
					data-aos='fade-right'
				>
					Let discuss your project
				</h1>
				<form
					ref={form}
					onSubmit={sendEmail}
					className='flex flex-col w-[40rem]  max-w-[25rem]   gap-2 bg-slate-400 p-[1rem] rounded-2xl  md:w-[30rem] sm:w-[20rem] xsm:w-[10rem]  '
				>
					<div className='flex gap-3 w-full'>
						<input
							type='text'
							required
							name='name'
							placeholder='First Name'
							className='h-[2rem] sm:h-[2rem] p-3 rounded-lg outline-none text-gray-800 text-bold placeholder-slate-400 border-none shadow-md shadow-zinc-700 w-[50%]  '
							data-aos='fade-right'
							data-aos-delay='1000'
						/>
						<input
							type='text'
							required
							name='name'
							placeholder='Last Name'
							className='h-[2rem] text-bold sm:h-[2rem] p-3 rounded-lg outline-none text-gray-800 placeholder-slate-400 border-none shadow-md shadow-zinc-700 w-[50%]  '
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
						className='h-[2rem] text-bold sm:h-[2rem] p-3 rounded-lg outline-none text-gray-800 placeholder-slate-400 border-none shadow-md shadow-zinc-700  '
						data-aos='fade-up'
						data-aos-offset='400'
						data-aos-duration='200'
					/>
					<input
						type='text'
						name='subject'
						placeholder='Subject'
						required
						className='h-[2rem] sm:h-[2rem] p-3 rounded-lg outline-none text-bold text-gray-800 placeholder-slate-400 border-none shadow-md shadow-zinc-700  '
						data-aos='fade-up'
						data-aos-offset='200'
						data-aos-duration='1500'
					/>
					<textarea
						name='message'
						id=''
						rows='20'
						cols='20'
						placeholder='Message'
						required
						className=' p-3 rounded-lg outline-none text-gray-800 placeholder-slate-400 border-none shadow-md shadow-zinc-700 h-[10rem] text-bold '
						data-aos='fade-up'
						data-aos-offset='200'
						data-aos-duration='1800'
					/>

					<button
						type='submit'
						className='bg-black/70  h-[2.2rem] text-lg md:text-base text-white  mx-[8rem] md:mx-[7rem] sm:mx-[6rem] xsm:mx-[2rem] sm:text-base rounded-lg shadow-lg mt-2 uppercase relative px-2 hover:text-cyan-600 btn'
					>
						Send{" "}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
