import Carousel from "./pages/carousel";
{
  /*import Header from './components/Header1'*/
}
import Header from "./components/Header";
import Main from "./pages/Main";
import "./index.css";
import Footer from "./components/Footer";

const slides = [
  "/src/assets/logoJ.png",
  "/src/assets/my logo.png",
  "/src/assets/QCU_07695.jpg",
];

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
