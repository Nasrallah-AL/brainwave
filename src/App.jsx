import './index.css'
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Header from "./components/Header.jsx";

function App() {
 return (
     <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
        <Header />

       <ButtonGradient />
      </div>
     </>
 );
}

export default App
