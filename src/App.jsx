import Cards from "./components/Cards";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <main className=" max-h-[700px] lg:max-h-[600px] bg-gradient-to-r from-blueApex to-orangeApex">
        <Hero />
        <Cards />
        <Portfolio />
        <Services />
        <Form />
      </main>
    </>
  );
}

export default App;
