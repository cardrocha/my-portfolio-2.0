import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Rotas from "./routes";

function App() {
	return (
		<BrowserRouter>
			<>
				<Header />
				<Rotas />
				<Footer />
			</>
		</BrowserRouter>
	);
}

export default App;
