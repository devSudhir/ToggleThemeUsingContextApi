import { ColorContext } from "../context/Theme";
import { useContext } from "react";
export function Style({ status }) {
  const { setColor } = useContext(ColorContext);
  const colorTheme = {
    light: {
      backgroundColor: "#333",
      color: "#aaa"
    },
    dark: {
      backgroundColor: "#fff",
      color: "#333"
    }
  };
  status ? setColor(colorTheme.light) : setColor(colorTheme.dark);
  return "";
}
