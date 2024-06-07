'use client'
import { Button } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { useState } from "react"
import { AuthForm } from "../AuthForm/AuthForm"
import { Overlay } from "../Overlay/Overlay"
import { Popup } from "../Popup/Popup"



export const Header = () => {


  const [popupIsOpened, setPopupIsOpened] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const openPopup = () => {
    setPopupIsOpened(true);
  };
  const closePopup = () => {
    setPopupIsOpened(false);
  };


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Solar Future</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="/devices">мои устройства</Nav.Link>
            <Nav.Link href="/order">заказать установку</Nav.Link>
            <Nav.Link href="/team">команда</Nav.Link>
          </Nav>
          <Button variant="outline-success">
          {isAuthorized ? (
            <span onClick={handleLogout}>
              Выйти
            </span>
          ) : (
            <span onClick={openPopup}>
              Войти
            </span>
          )}
          </Button>
        </Navbar.Collapse>
      </Container>
      <Overlay isOpened={popupIsOpened} close={closePopup} />
      <Popup isOpened={popupIsOpened} close={closePopup}>
        <AuthForm close={closePopup} setAuth={setIsAuthorized}/>
      </Popup>
    </Navbar>

  )
}
