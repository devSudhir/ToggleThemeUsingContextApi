import styled from "styled-components";

export function SingleUser({ prop }) {
  const Wrapper = styled.div`
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      h3,
      h5 {
        margin: 5px;
      }
    }
    & > div > img {
      width: 40px;
      height: 40px;
      border-radius: 40px;
    }

    & > div:last-child {
      display: flex;
      justify-content: space-between;
    }
  `;
  return (
    <Wrapper>
      <div>
        <img
          src="https://source.unsplash.com/user/erondu/1600x900"
          alt="random_image"
        />
        <div>
          <h3>{prop.name}</h3>
          <h5>{prop.place}</h5>
        </div>
      </div>
      <div>
        <hr
          style={{
            width: `${Math.floor((prop.points * 10) / 100)}px`,
            backgroundColor: "tomato",
            height: "3px",
            border: "none",
            marginLeft: 0
          }}
        />
      </div>

      <div>
        <p>Professional level {prop.level} </p>
        <p>{prop.points}</p>
      </div>
    </Wrapper>
  );
}
