import { useContext } from "react";
import { ColorContext } from "../context/Theme";

export function Main() {
  const { status } = useContext(ColorContext);
  return (
    <main>
      <div>
        <form style={{ padding: "10px" }}>
          <input
            type="text"
            placeholder="First_name"
            style={
              status
                ? {
                    background: "black",
                    color: "#fff",
                    padding: "10px",
                    border: "1px solid #fff",
                    marginRight: "10px"
                  }
                : {
                    background: "#eee",
                    color: "#000",
                    padding: "10px",
                    border: "1px solid coral",
                    marginRight: "10px"
                  }
            }
          />
          <input
            type="text"
            placeholder="Last_name"
            style={
              status
                ? {
                    background: "black",
                    color: "#fff",
                    padding: "10px",
                    border: "1px solid #fff",
                    marginRight: "10px"
                  }
                : {
                    background: "#eee",
                    color: "#000",
                    padding: "10px",
                    border: "1px solid coral",
                    marginRight: "10px"
                  }
            }
          />
          <button
            type="submit"
            style={
              status
                ? {
                    background: "black",
                    color: "#fff",
                    padding: "10px",
                    border: "1px solid #fff"
                  }
                : {
                    background: "#eee",
                    color: "#000",
                    padding: "10px",
                    border: "1px solid coral"
                  }
            }
          >
            Submit
          </button>
        </form>
      </div>
      <div
        style={{
          padding: "10px",
          width: "50vw",
          margin: "10px auto",
          border: "3px solid coral"
        }}
      >
        <img
          style={{ width: "300px" }}
          src="https://source.unsplash.com/1600x900/?nature,water"
          alt=""
        />
        <p
          style={
            status
              ? { background: "black", color: "#fff" }
              : { background: "#eee", color: "#000" }
          }
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div
        style={{
          padding: "10px",
          width: "50vw",
          margin: "10px auto",
          border: "3px solid yellow"
        }}
      >
        <img
          style={{ width: "300px" }}
          src="https://source.unsplash.com/1600x900/?technology,robot"
          alt=""
        />
        <p
          style={
            status
              ? { background: "black", color: "#fff" }
              : { background: "#eee", color: "#000" }
          }
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </main>
  );
}
