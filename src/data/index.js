import Tiamz from "../assets/photo.png";
import nikey from "../assets/nikey.png";
import colorgame from "../assets/colorgame.png";
import lizan from "../assets/lizan.png";
import nexter from "../assets/nexter.png";
import HR from "../assets/HR.png";
import Creditcard from "../assets/Creditcard.jpg";
import Google_play from "../assets/Google_play.png";
import Oldest_business from "../assets/Oldest_business.jpg";
import Hospitality from "../assets/Hospitality.png";
import UI_screenshot from "../assets/UI_screenshot.png";
import Absenteeism from "../assets/absenteeism.jpeg";
// import ECS from "../assets/ECS.jpeg";
import BKS from "../assets/BCS.jpeg";
import bankapp from "../assets/bankapp.png";

const infos = [
    {
        img: Tiamz,
        intro: "hey, I am Ismail",
        text: "Frontend developer with experience in creating responsive and interactive web applications."
    }
];

const about = [
    {
        title: "About Me",
        text: "I am a passionate Front-End Developer skilled in HTML, CSS, JavaScript, and modern frameworks like React and Remix. \
		I am specialized in building responsive, accessible, and high-performance web applications that deliver seamless user experiences. \
		I have hands-on experience turning complex designs into interactive, user-friendly interfaces using Tailwind CSS, TypeScript, \
		and modern UI best practices. My focus is always on creating clean, maintainable code while optimizing for speed, scalability, \
		and accessibility. I’m deeply committed to continuous learning and staying ahead of emerging trends in the frontend ecosystem. \
		My goal is to become a well-rounded frontend engineer, mastering everything from UI implementation and state management to \
		API integration and performance optimization. I believe persistence, creativity, and curiosity are the driving forces behind \
		impactful web solutions and I bring those values to every project I work on."
    }
];
const portfolio = [
	{
		title: "Project",
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
            }, {
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
			},
				{
				title: "Color Game",
				text: "This is a color RGB game built mainly on javascript",
				img: colorgame,
				url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
				btn: "View now"
			},
			// {
			// 	title: "Student Performance Prediction",
			// 	text: "The project focused on Predicting student score using machine learning",
			// 	img: UI_screenshot,
			// 	url: "https://github.com/Tiamz01/ML_Student_Performance_Predictor",
			// 	btn: "View now"
			// },
			// {
			// 	title: "Email/SMS classificaition system",
			// 	text: "The project focused on classify in incoming sms or email as either spam or not. It is Machine learning classification algorithm",
			// 	img: ECS,
			// 	url: "https://emailspamclassification-sb4xawajku9yn6wyahuk4f.streamlit.app/",
			// 	btn: "View now"
			// },
			// {
			// 	title: "Absenteeism Prediction",
			// 	text: "The project focused on Predicting and understand the  factor for staff absenteeism",
			// 	img: Absenteeism,
			// 	url: "https://github.com/Tiamz01/Absenteeism_project",
			// 	btn: "View now"
			// },
			// {
			// 	title: "Book recommendation system",
			// 	text: "The project focused on suggesting books based on close proximity to the intended search using K Nearest Neigbor",
			// 	img: BKS,
			// 	url: "https://bookrecommendationsystem-alsqf8anh38pyvwutmjv6a.streamlit.app/",
			// 	btn: "View now"
			// },
			// {
			// 	title: "Sentimental Analysis:  Google Play Store",
			// 	text: "The analysis focus on undertsanding users feeling about the apps in the Google  app market",
			// 	img: Google_play,
			// 	url: "https://github.com/Tiamz01/Sentimental-Analysis-The-Android-App-Market-on-Google-Play",
			// 	btn: "View now"
			// },
			// {
			// 	title: "Predicting Credit Card Approvals",
			// 	text: "Using machine learning to predict customer eligibility for credit card approval",
			// 	img: Creditcard,
			// 	url: "https://github.com/Tiamz01/Predicting-Credit-Card-Approvals/blob/main/README.md",
			// 	btn: "View now"
			// },
			// {
			// 	title: "HR_Analytics",
			// 	text: "Analysis of HR data to understand staff working preferences ",
			// 	img: HR,
			// 	url: "https://github.com/Tiamz01/HR_-Analytics",
			// 	btn: "View now"
			// },
			// {
			// 	title: "Hospitality domain sales analysis",
			// 	text: "Analysis of Hotel sales rate",
			// 	img: Hospitality,
			// 	url: "https://github.com/Tiamz01/Hospitality_domain_sales_analysis",
			// 	btn: "View now"
			// },
			// {
			// 	title: "World Oldest Businesses investigation",
			// 	text: "The analysis focus on investigating the world oldest business and their location",
			// 	img: Oldest_business,
			// 	url: "https://github.com/Tiamz01/DS-Investigate-World-Oldest-Businesses-and-their-location",
			// 	btn: "View now"
			// },
		
			
		]
	}
];

export { infos, portfolio, about };
