
import FamilyBackground from "./components/FamilyBackground";
import Footer from "./components/Footer";
import Header from "./components/header";
import Nav from "./components/nav";
import ProfessionalBackground from "./components/ProfessionalBackground";



function App() {
  return (
    <div className="App bg-black">
      <main className="">
        <Nav/>
        <Header />
        <ProfessionalBackground/>
        <FamilyBackground/>
        <Footer />

      </main>
    </div>
  );
}

export default App;
