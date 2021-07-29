import styled from "styled-components";
import { Icon } from "@iconify/react";
import statisticsIcon from "@iconify-icons/whh/statistics";
import clipboardArrowRight from "@iconify-icons/mdi/clipboard-arrow-right";
import institutionIcon from "@iconify-icons/vaadin/institution";
import bxMessageDetail from "@iconify-icons/bx/bx-message-detail";
import fileIcon from "@iconify-icons/akar-icons/file";
import settingFilled from "@iconify-icons/ant-design/setting-filled";
import circlePlusFill from "@iconify-icons/akar-icons/circle-plus-fill";
import { useContext } from "react";
import { ColorContext } from "../context/Theme";
const Nav = styled.div`
  padding: 20px 0px;
  height: 600px;
  width: 81px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0%;
  right: 94.38%;
  top: 0%;
  bottom: 0%;

  border-right: 1px solid aqua;
  & > div {
    width: 100%;
  }
  & > img {
    width: 40px;
    border-radius: 100%;
  }
`;
const Icons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export function Navbar() {
  const { status } = useContext(ColorContext);

  return (
    <Nav style={status ? { background: "black" } : { background: "#eee" }}>
      <img
        src="https://images.unsplash.com/photo-1542483109-ee476dbcd93e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFiZHVsJTIwa2FsYW18ZW58MHx8MHx8"
        alt="profile_image"
      />
      <Icons>
        <Icon
          icon={statisticsIcon}
          width="40"
          height="40"
          color={status ? "white" : "#333"}
        />
        <hr style={{ width: "20%" }} />
        <Icon
          icon={clipboardArrowRight}
          width="40"
          height="40"
          color={status ? "white" : "#333"}
        />
        <hr style={{ width: "20%" }} />
        <Icon
          icon={institutionIcon}
          width="40"
          height="40"
          color={status ? "white" : "#333"}
        />
        <hr style={{ width: "20%" }} />
        <Icon
          icon={bxMessageDetail}
          width="40"
          height="40"
          color={status ? "white" : "#333"}
        />
        <hr style={{ width: "20%" }} />
        <Icon
          icon={fileIcon}
          width="40"
          height="40"
          color={status ? "white" : "#333"}
        />
        <hr style={{ width: "20%" }} />
        <Icon
          icon={settingFilled}
          width="40"
          height="40"
          color={status ? "white" : "#333"}
        />
        <hr style={{ width: "20%" }} />
      </Icons>
      <Icon icon={circlePlusFill} width="40" height="40" color="aqua" />
    </Nav>
  );
}
