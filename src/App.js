import './App.css';
import AppRoutes from "./Routes";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";

function App() {
  return (
      <div className={"app-background"}>
        <Header/>
        <div >
          <AppRoutes/>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
