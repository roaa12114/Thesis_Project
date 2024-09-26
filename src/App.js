import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Card from "./components/card";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
