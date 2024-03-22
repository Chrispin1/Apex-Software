import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className=" max-h-[2600px] md:max-h-[580px] lg:max-h-[600px] bg-gradient-to-r from-blueApex to-orangeApex">
        <Hero />
        <Cards />
      </main>
    </>
  );
}

export default App;
