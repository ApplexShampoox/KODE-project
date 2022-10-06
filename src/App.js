
import { useState } from "react";
import Container from "./components/Container/Container";
import Modal from "./components/Modal/Modal";
import Navigation from "./components/Navigation/Navigation";


function App() {
  const [show, setShow] = useState(true);
  return (
    <Container >
      <Navigation onOpen={() => setShow(true)} />
      <Modal onClose={() => setShow(false)} show={show} />
    </Container >
  );
}

export default App;
