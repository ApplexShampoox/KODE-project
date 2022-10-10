import { useState } from "react";
import { Outlet } from "react-router";
import Container from "../Container/Container";
import Modal from "../Modal/Modal";
import Navigation from "../Navigation/Navigation";
import Tabs from "../Tabs/Tabs";

const Layout = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className='header'>
        <Container >
          <Navigation onOpen={() => setShow(true)} />
          <Modal onClose={() => setShow(false)} show={show} />
          <Tabs />
        </Container >

      </header>
      <main className='main'>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;