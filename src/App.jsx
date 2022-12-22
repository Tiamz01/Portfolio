import { Routes, Route } from "react-router-dom";

import { Contact } from "./component";
import Home from "./component/Home";

function App() {
	return (
		<div className={`bg-black/80 overflow-hidden`}>
			{/* */}
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/contact'
					exact
					element={<Contact />}
				/>
			</Routes>
		</div>
	);
}

export default App;
{
	/* <Routes>
				<Route
					index
					element={<Hero />}
				/>
				<Route
					path='/Portfolio'
					element={<Portfolio />}
				/>
			</Routes> */
}
