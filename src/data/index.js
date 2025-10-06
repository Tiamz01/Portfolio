import Tiamz from "../assets/photo.png";
import nikey from "../assets/nikey.png";
import colorgame from "../assets/colorgame.png";
import lizan from "../assets/lizan.png";
import nexter from "../assets/nexter.png";
import ECS from "../assets/ECS.png";
import HR from "../assets/HR.png";
import Creditcard from "../assets/Creditcard.jpg";
import Google_play from "../assets/Google_play.png";
import Oldest_business from "../assets/Oldest_business.jpg";
import Hospitality from "../assets/Hospitality.png";
import UI_screenshot from "../assets/UI_screenshot.png";
import Absenteeism from "../assets/absenteeism.jpeg";
import BKS from "../assets/BCS.jpeg";
import bankapp from "../assets/bankapp.png";

const infos = [
    {
        img: Tiamz,
        intro: "hey, I am Ismail",
        text: "specializing in building responsive, interactive web applications and integrating AI/ML models to deliver smarter, data-driven user experiences."
    }
];

const about = [
    {
        title: "About Me",
        text: "I am an experienced Frontend Developer with over 4 years+ of experience building with JavaScript, React, and modern UI frameworks across various industries, and a growing focus on integrating AI and Machine Learning into user experiences. " +
        "My background in Data Science and Machine Learning allows me to design not only responsive and interactive interfaces but also intelligent applications that deliver data-driven insights in real time. " +
        "I enjoy building products where data meets design from dashboards that visualize predictive analytics to interfaces that interact seamlessly with AI-powered APIs. With hands-on experience in Python, " +
        "Scikit-learn, Flask, and RESTful API integration, I bridge frontend engineering with backend intelligence, creating smart, efficient, and human-centered digital solutions. " +
        "I'm committed to continuous learning, exploring emerging technologies like LLMs, data visualization, and AI-assisted UX, and collaborating with teams to push the boundaries " +
        "of what's possible on the web."
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
                url: "https://lizan-78ea.vercel.app/",
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
				title: "Book recommendation system",
				text: "The project focused on suggesting books based on close proximity to the intended search using K Nearest Neigbor",
				img: BKS,
				url: "https://bookrecommendationsystem-alsqf8anh38pyvwutmjv6a.streamlit.app/",
				btn: "View now"
			},
			{
			
				title: "Email/SMS classificaition system",
				text: "The project focused on classify in incoming sms or email as either spam or not. It is Machine learning classification algorithm",
				img: ECS,
				url: "https://emailspamclassification-sb4xawajku9yn6wyahuk4f.streamlit.app/",
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
			// 	title: "Student Performance Prediction",
			// 	text: "The project focused on Predicting student score using machine learning",
			// 	img: UI_screenshot,
			// 	url: "https://github.com/Tiamz01/ML_Student_Performance_Predictor",
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
