import Corosel from "./components/Corosel";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./views/HomePage";
import DetailPage from "./views/DetailPage";

function App() {
     return (
          <div className="putih" >
               {/* <Navbar />
               <Corosel />
               <HomePage /> */}
               <DetailPage />
          </div>

     );
}

export default App;
