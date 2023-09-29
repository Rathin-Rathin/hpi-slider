import Content from "./components/content/Content";
import Header from "./components/header/Header";
import './components/Border/Border.css';
import Slider from "./components/Slider/Slider";
const App = () => {
  return (
    <div className="p-2 flex gap-2">
      <div className="main-box w-[70%] h-[100vh] pb-4">
        {/* Main div for border */}
        <div className="box m-2 ">
          <div className="z-10 relative w-[98%] mx-auto">
            <Header />
            <Slider />
          </div>

        </div>
      </div>
      <div className="rounded-lg bg-gradient-to-r from-cyan-500 to-[#d500f9] p-2 w-[30%] h-[100vh]">
        <Content />
      </div>
    </div>
  );
};

export default App;