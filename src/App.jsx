import { Routes, Route } from "react-router-dom";
import { Contact } from "./component";
import Home from "./component/Home.jsx";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { createContext } from "react";

function App() {
	const themeContext = createContext("null");

	const [theme, setTheme] = useState("light");
	function toggle() {
		setTheme(theme === "dark" ? "light" : "dark");
	}

	useEffect(() => {
		Aos.init({ duration: 2000 });
	});
	return (
		<themeContext.Provider>
			<div id={theme}>
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
		</themeContext.Provider>
	);
}

export default App;
