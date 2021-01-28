import "./main.scss";
import {Header} from "../Layout/Header/Header.jsx";
import {NewSection} from "../Pages/NewSection";
import {PreorderSection} from "../Pages/PreorderSection";
import {GenresSection} from "../Pages/GenresSection";
import {Footer} from "../Layout/Footer/Footer";
import {TopBar} from "../TopBar/TopBar";

function App() {


  return (
    <div className="App">
      <TopBar />
      <Header />
      <NewSection />
      <PreorderSection />
       <GenresSection />
      <Footer />
    </div>
  );
}

export default App;
