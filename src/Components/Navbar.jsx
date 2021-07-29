import styled from "styled-components";
import { useContext } from "react";
import { ColorContext } from "../context/Theme";
const Nav = styled.div`
  padding: 0 10px;
  width: 90vw;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > img {
    width: 40px;
    border-radius: 100%;
  }

  & > div > a {
    text-decoration: none;
    margin-right: 10px;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: auto;
  & > span:nth-child(1) {
    font-family: roboto;
    font-weight: 700;
    font-size: 2rem;
    margin: 20px;
  }
  & > div {
    width: 50px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid #333;
    display: flex;
    background-color: aqua;
  }
  & > div > button {
    width: 50%;
    border: none;
    height: 100%;
    border-radius: 100%;
  }
`;

export function Navbar() {
  const { status, setStatus } = useContext(ColorContext);

  return (
    <Nav
      style={
        status
          ? { background: "black", color: "#fff" }
          : { background: "#eee", color: "#000" }
      }
    >
      <img
        src="https://images.unsplash.com/photo-1542483109-ee476dbcd93e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFiZHVsJTIwa2FsYW18ZW58MHx8MHx8"
        alt="profile_image"
      />
      <Header>
        <span>My Dashboard</span>
        <div
          onClick={() => {
            setStatus(!status);
          }}
        >
          {status ? (
            <>
              <button></button>
              <button style={{ visibility: "hidden" }}></button>
            </>
          ) : (
            <>
              <button style={{ visibility: "hidden" }}></button>
              <button></button>
            </>
          )}
        </div>
      </Header>
      <div>
        <a
          style={
            status
              ? { background: "black", color: "#fff" }
              : { background: "#eee", color: "#000" }
          }
          href="/"
        >
          Login
        </a>
        <a
          style={
            status
              ? { background: "black", color: "#fff" }
              : { background: "#eee", color: "#000" }
          }
          href="/"
        >
          Signup
        </a>
      </div>
    </Nav>
  );
}
