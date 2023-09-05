import Tiamz from "../assets/photo.png";
import HR from "../assets/HR.png";
import nikey from "../assets/nikey.png";
import Creditcard from "../assets/Creditcard.jpg";
import Google_play from "../assets/Google_play.png";
import Oldest_business from "../assets/Oldest_business.jpg";
import Hospitality from "../assets/Hospitality.png";
// import colorgame from "../assets/colorgame.png";
import lizan from "../assets/lizan.png";
// import nexter from "../assets/nexter.png";
import bankapp from "../assets/bankapp.png";

const infos = [
	{
		img: Tiamz,
		intro: "hey, I am Ismail",
		text: "Data professional with experiences in data analysis and predictive analytics."
	}
];

const about = [
	{
		title: "About Me",
		text: "Driven data science practitioner with 2 years of experience applying analytical abilities to extract impactful insights. Completed online program covering full data science stack - Python, SQL, statistical modeling, machine learning, and data visualization. Supplemented by front-end development skills in HTML, CSS and JavaScript.  Previous roles in customer services and relations, marketing and business analytics and intelligence developed strong acumen for data-driven thinking and leveraging analytics to guide decisions. Successfully delivered projects analyzing campaign metrics, customer segmentation, pricing models, and more. Excited to expand into more advanced techniques. Remain actively engaged in the local data science community - collaborating on projects, exchanging knowledge, and staying updated on the latest tools and methods. Pursue continuous learning through online courses, textbooks, and hands-on practice. Eager to take on new challenges and real-world problems. Passionate about social impact and dedicating technical abilities to create positive change. Currently volunteering with non-profits to support their data and analytics needs. Aspire to apply skills ethically across public, private, and social sectors. Moving forward, I aim to grow into a well-rounded data science leader - mastering the full spectrum from data extraction and transformation to statistical modeling and communication of data-driven recommendations. Confident that persistence, mindset, and lifelong learning will lead to greater impact."
	}
];
const portfolio = [
	{
		title: "Project",
		projects: [
			{
				title: "Sentimental Analysis:  Google Play Store",
				text: "The analysis focus on undertsanding users feeling about the apps in the Google  app market",
				img: Google_play,
				url: "https://github.com/Tiamz01/Sentimental-Analysis-The-Android-App-Market-on-Google-Play",
				btn: "View now"
			},
			{
				title: "Predicting Credit Card Approvals",
				text: "Using machine learning to predict customer eligibility for credit card approval",
				img: Creditcard,
				url: "https://github.com/Tiamz01/Predicting-Credit-Card-Approvals/blob/main/README.md",
				btn: "View now"
			},
			{
				title: "HR_Analytics",
				text: "Analysis of HR data to understand staff working preferences ",
				img: HR,
				url: "https://github.com/Tiamz01/HR_-Analytics",
				btn: "View now"
			},
			{
				title: "Hospitality domain sales analysis",
				text: "Analysis of Hotel sales rate",
				img: Hospitality,
				url: "https://github.com/Tiamz01/Hospitality_domain_sales_analysis",
				btn: "View now"
			},
			{
				title: "World Oldest Businesses investigation",
				text: "The analysis focus on investigating the world oldest business and their location",
				img: Oldest_business,
				url: "https://github.com/Tiamz01/DS-Investigate-World-Oldest-Businesses-and-their-location",
				btn: "View now"
			},
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
			// {
			// 	title: "Color Game",
			// 	text: "This is a color RGB game built mainly on javascript",
			// 	img: colorgame,
			// 	url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
			// 	btn: "View now"
			// },
			// {
			// 	title: "Nexter",
			// 	text: "This is a  realtor landing page",
			// 	img: nexter,
			// 	url: "https://nexter-lilac.vercel.app/",
			// 	btn: "View now"
			// },
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
