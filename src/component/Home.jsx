import { About, Footer, Hero, Navbar, Portfolio, Skills } from "./index";

const Home = () => {
	return (
		<div id='home'>
			<Navbar />
			<Hero />
			<Portfolio />
			<Skills />
			<About />
			<Footer />
		</div>
	);
};

export default Home;
