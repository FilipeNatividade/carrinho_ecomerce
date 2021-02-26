import "./App.css";
import Menu from "./components/Menu";
import Footer from "./components/footer";
import Routes from "./Routes";

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
