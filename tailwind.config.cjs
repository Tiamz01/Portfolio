/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"]
			}
		},
		screens: {
			xl: { max: "1200px" },
			lg: { max: "991px" },
			md: { max: "767px" },
			sm: { max: "550px" },
			xsm: { max: "357px" }
		}
	},
	plugins: []
};
