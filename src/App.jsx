import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";
import Trending from "./components/Trending/Trending";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Sidebar />
      </main>
      <Trending />
      <Footer />
    </div>
  );
};

export default App;
