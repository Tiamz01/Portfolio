import Tiamz from "./../assets/photo.png";
import nikey from "../assets/nikey.png";
import colorgame from "../assets/colorgame.png";
import lizan from "../assets/lizan.png";
import nexter from "../assets/nexter.png";
import bankapp from "../assets/bankapp.png";

const infos = [
	{
		img: Tiamz,
		intro: "hey, I am Ismail",
		text: "Frontend developer and javascript . I am open for collaboration and entry level job opportunity."
	}
];

const about = [
	{
		title: "About Me",
		text: "Self-thought frontend developer with 7 months plus of learning experience, looking forward to providing high-impact web solutions for diverse industry organizations. Skilled in designing, developing, and testing multiple web-based applications incorporating a range of technologies with over years of working experiences as a customer services professional and small business management. With dynamic, I am so much interest in IT and Music business. I am looking for collaboration mentorship, internship, or a job opportunity in a reputable organization to expand my learnings, knowledge, and skills. Aspiring to combine broad background with strong technical skills to excel as a Front-End Developer. Secure a responsible career opportunity to fully harness my skills, while making a significant contribution to the success of the company."
	}
];
const portfolio = [
	{
		title: "previous project",
		projects: [
			{
				title: "Nike store",
				text: "This is a an Ecommerce simulation web app for selling of shoes built with react, redux and react Toolkit",
				img: nikey,
				url: "https://lovely-kringle-96c007.netlify.app/",
				btn: "View now"
			},
			{
				title: "Lizan",
				text: "A music streaming app with a real time music update using Rapid Api built with react, redux and react Toolkit",
				img: lizan,
				url: "https://effortless-lokum-dcfbf3.netlify.app/",
				btn: "View now"
			},
			{
				title: "Color Game",
				text: "This is a color RGB game built mainly on javascript",
				img: colorgame,
				url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
				btn: "View now"
			},
			{
				title: "Nexter",
				text: "This is a  realtor landing page",
				img: nexter,
				url: "https://nexter-lilac.vercel.app/",
				btn: "View now"
			},
			{
				title: "Bank app",
				text: "This is a  modern bank app design with react and tailwind css",
				img: bankapp,
				url: "https://voluble-axolotl-534afa.netlify.app/",
				btn: "View now"
			}
		]
	}
];

export { infos, portfolio, about };
