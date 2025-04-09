import { Route, Routes } from "react-router-dom";
import Quest from "./components/Quest";
import Skills from "./components/Skills";
import Status from "./components/Status";
import Home from "./pages/Home";
import Project from "./pages/Project";

const Rotas = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<Status />} />
			<Route path="/project" element={<Project />} />
			<Route path="/skills" element={<Skills />} />
			<Route path="/quest" element={<Quest />} />
		</Routes>
	);
};

export default Rotas;
