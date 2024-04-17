import Homepage from "./components/Homepage";
import ContactUs from "./components/ContactUs";
import EventsPage from "./components/EventsPage";
import TeamRoaster from "./components/TeamRoaster";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/events" element={<EventsPage />} />
				<Route path="contact-us" element={<ContactUs />} />
				<Route path="/team-roaster" element={<TeamRoaster />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
