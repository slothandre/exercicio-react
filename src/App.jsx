import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container></Container>
    </BrowserRouter>
  );
}

export default App;
