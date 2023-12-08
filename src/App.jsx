import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";
import Home from "./pages/Home";
import ClassicRock from "./pages/ClassicRock";
import HeavyMetal from "./pages/HeavyMetal";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route Component={Home} exact path="/" />
          <Route Component={ClassicRock} path="/classic-rock" />
          <Route Component={HeavyMetal} path="/heavy-metal" />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
