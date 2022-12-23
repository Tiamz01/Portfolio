import { Fade } from "react-reveal";
import { About, Footer, Hero, Navbar, Portfolio, Skills } from "../component";
Fade;

const Home = () => {
	return (
		<div id='home'>
			<Fade
				top
				distance='20%'
				duration={3000}
			>
				<Navbar />
				<Hero />
				<Portfolio />
				<Skills />
				<About />
				<Footer />
			</Fade>
		</div>
	);
};
export default Home;
