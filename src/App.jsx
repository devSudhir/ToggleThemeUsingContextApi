import "./styles.css";
import { useContext } from "react";
import { ColorContext } from "./context/Theme";
import styled from "styled-components";
import { Navbar } from "./Components/Navbar";
import { Users } from "./Components/Users";

export default function App() {
  const { status, setStatus } = useContext(ColorContext);
  console.log(status, setStatus);
  const Header = styled.div`
    position: absolute;
    left: 100px;
    display: flex;
    align-items: center;
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

  return (
    <div
      className="App"
      style={
        status
          ? {
              backgroundColor: "#333",
              color: "#aaa",
              width: "100vw",
              height: "100vh",
              margin: "0px"
            }
          : {
              backgroundColor: "#fff",
              color: "#333",
              width: "100vw",
              height: "100vh",
              margin: "0px"
            }
      }
    >
      <Navbar />
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
      <Users />
    </div>
  );
}
/* Bg */
