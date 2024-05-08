import './index.css'
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import {Benefits} from "./components/Benefits.jsx";

function App() {
 return (
     <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
          <Header />
          <Hero />
          <Benefits />
       <ButtonGradient />
      </div>
     </>
 );
}

export default App
