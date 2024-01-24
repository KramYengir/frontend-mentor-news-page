import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";
import Trending from "./components/Trending/Trending";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Sidebar />
      </main>
      <Trending />
    </div>
  );
};

export default App;
