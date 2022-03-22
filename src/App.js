import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Content from "./components/SectionContent/Content";
import Mutate from "./components/SectionMutate/Mutate";
import Schedule from "./components/SectionSchedule/Schedule";
import Team from "./components/SectionTeam/Team";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Mutate />
			<About />
			<Content />
			<Schedule />
			<Team />
			<Footer />
		</>
	);
}

export default App;
