import { useState } from "react";
import { Outlet } from "react-router";
import Container from "../Container/Container";
import Modal from "../Modal/Modal";
import Navigation from "../Navigation/Navigation";
import Tabs from "../Tabs/Tabs";

const Layout = () => {
  const [show, setShow] = useState(false);
  const [favorite, setFavorite] = useState("ByAlphabet");
  const onClose = () => setShow(false);

  return (
    <>
      <header className='header'>
        <Container >
          <Navigation favorite={favorite} onOpen={() => setShow(true)} />
          <Modal favorite={favorite} onChange={(e) => {
            setFavorite(e.target.id);
            localStorage.setItem('favorite', favorite);
            onClose();
          }} onClose={onClose} show={show} />
          <Tabs favorite={favorite} />
        </Container >
      </header>
      <main className='main'>
        <Outlet favorite={favorite} />
      </main>
    </>
  );
}

export default Layout;