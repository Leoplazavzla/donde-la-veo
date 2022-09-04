import './App.css';
import AppRoutes from "./Routes";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";

function App() {
  return (
      <div >
        <Header/>
        <main >
          <AppRoutes/>
        </main>
        <Footer/>
      </div>
  );
}

export default App;
