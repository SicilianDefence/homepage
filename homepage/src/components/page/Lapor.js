import { Navbar, Container, Nav, Image } from "react-bootstrap";
import React, { useEffect } from "react";
import "../../style/lapor.css";
import logo from "../../assets/logo.png";
import question from "../../assets/question.png";
import Wave from "react-wavify";
import { useNavigate } from "react-router-dom";

const Lapor = () => {
  useEffect(() => {
    document.title = "Lapor";
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="myFourthBG">
      <Container>
        <div className="nav-head">
          <Navbar expand="lg">
            <Navbar.Brand href="/" className="nav-guardian">
              <Image src={logo} className="logo"></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0 nav-left" style={{ maxHeight: "100px" }} navbarScroll>
                <Nav.Link href="/" className="tentang">
                  TENTANG
                </Nav.Link>
                <Nav.Link href="cekberita" className="cekberita">
                  CEK BERITA
                </Nav.Link>
              </Nav>
              <Nav className="justify-content-center lapor-bg">
                <Nav.Link href="/lapor" className="lapor-link">
                  LAPOR BERITA
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Container>
      <Container>
        <div className="lapor">
          <div className="image-lapor">
            <Image className="question-img" src={question}></Image>
          </div>
          <div className="form-lapor">
            <div className="title-lapor-page">Lapor Berita</div>
            <form className="div-email">
              <input type="email" className="input-email" placeholder="Masukkan Alamat Email..." required />
            </form>
            <form className="div-judul">
              <input type="text" className="input-judul" placeholder="Masukkan Judul Berita..." required />
            </form>
            <form className="div-link">
              <input type="text" className="input-link" placeholder="Masukkan Link Berita..." required />
            </form>
            <form className="div-jelaskan">
              <input type="text" className="input-jelaskan" placeholder="Jelaskan Berita Hoax dan Hate Speech..." required />
            </form>
            <div className="button-container">
              <button className="button-red" onClick={handleButtonClick}>
                Submit
              </button>
            </div>
          </div>
        </div>
        <Wave
          fill="#ffffff"
          paused={false}
          style={{ display: "fixed" }}
          options={{
            height: 2,
            bones: 6,
            amplitude: 20,
            color: "#ffffff",
            speed: 0.35,
          }}
          className="wave-page45"
        />
      </Container>
    </div>
  );
};

export default Lapor;
