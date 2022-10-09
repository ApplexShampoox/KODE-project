import { useState } from "react";
import Container from "./components/Container/Container";
import Modal from "./components/Modal/Modal";
import Navigation from "./components/Navigation/Navigation";
import Tabs from "./components/Tabs/Tabs";
import UserList from "./components/UserList/UserList";
import NetworkError from "./components/FailureScreen/NetworkError";
import SearchError from "./components/FailureScreen/SearchError";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
  const [show, setShow] = useState(false);
  const style = {
    maxWidth: '1280px',
    margin: '0 auto 13px',
    backgroundColor: '#C3C3C6',
  };

  return (
    <>

      <UserDetails />



      {/* <Container >
        <Navigation onOpen={() => setShow(true)} />
        <Modal onClose={() => setShow(false)} show={show} />
        <Tabs />
      </Container >
      <hr style={style} /> */}

      {/* <Container >
        <UserList />
      </Container> */}


      {/* <NetworkError /> */}
      {/* <SearchError /> */}

    </>
  );
}

export default App;
