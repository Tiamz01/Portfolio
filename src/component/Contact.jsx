import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.form(
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
				<h1 className='text-clip md:text-[1.4rem] sm:text-[1.2rem]'>
					Let discuss your project
				</h1>
				<form
					ref={form}
					action=''
					onSubmit={sendEmail}
					className=' flex flex-col relative justify-center w-[50vh] max-w-[50vh] max-h-[50vh]  gap-2 bg-slate-400 p-[1rem] rounded-2xl sm:w-[40vh] sm:h-[40vh] '
				>
					<input
						type='text'
						required
						name='Name'
						placeholder='Full Name'
						className='h-[2.5rem] sm:h-[2rem] p-3 rounded-lg outline-none text-gray-800 placeholder-slate-400 border-none shadow-md shadow-zinc-700  '
					/>
					<input
						type='email'
						name='email'
						placeholder='Email'
						required
						className='h-[2.5rem] sm:h-[2rem] p-3 rounded-lg outline-none text-gray-800 placeholder-slate-400 border-none shadow-md shadow-zinc-700  '
					/>
					<textarea
						name='message'
						id=''
						rows='20'
						cols='20'
						placeholder='Message'
						required
						className=' p-3 rounded-lg outline-none text-gray-800 placeholder-slate-400 border-none shadow-md shadow-zinc-700  '
					/>

					<button
						type='button'
						onClick={() => sendEmail()}
						className='bg-black/70  h-[7rem] text-lg text-white  mx-[4rem] rounded-lg shadow-lg shadow-sky-200 uppercase relative px-3 btn'
					>
						Send{" "}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
