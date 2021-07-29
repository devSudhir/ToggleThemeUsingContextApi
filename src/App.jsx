import "./styles.css";
import { useContext } from "react";
import { ColorContext } from "./context/Theme";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Main } from "./Components/Main";

export default function App() {
  const { status } = useContext(ColorContext);
  return (
    <div
      className="App"
      style={
        status
          ? { background: "black", color: "#fff" }
          : { background: "#eee", color: "#000" }
      }
    >
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
/* Bg */
