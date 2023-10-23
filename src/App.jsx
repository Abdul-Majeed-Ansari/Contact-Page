import "./App.css";
import Contact from "./Components/ContactUs/Contact";
import HeaderSection from "./Components/Header/HeaderSection";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <>
      <div className="conatiner">
        <Navigation />
        <main className="main_container">
          <HeaderSection />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
