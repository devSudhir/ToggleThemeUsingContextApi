import styled from "styled-components";
import { SingleUser } from "./SingleUser";
import { useContext } from "react";
import { ColorContext } from "../context/Theme";
export function Users() {
  const { status } = useContext(ColorContext);
  const Container = styled.div`
    width: 50vw;
    border: 1px solid #333;
    padding: 15px;

    & > div:first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `;

  const Active = styled.div`
    position: absolute;
    top: 150px;
    left: 100px;
  `;

  const user = [
    {
      name: "Nrupul Dev",
      place: "Banglore,India",
      level: 15,
      points: 4723
    },
    {
      name: "Sandya",
      place: "Banglore,India",
      level: 11,
      points: 2339
    },
    {
      name: "Elon Tusk",
      place: "Carlifornia,USA",
      level: 6,
      points: 1884
    }
  ];
  return (
    <Active>
      <Container
        style={
          status ? { backgroundColor: "#000" } : { backgroundColor: "#eee" }
        }
      >
        <div>
          <span>Active Users</span>
          <span>From August 2020</span>
        </div>
        {user.map((ele) => {
          return <SingleUser prop={ele} />;
        })}
      </Container>
    </Active>
  );
}
