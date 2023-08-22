import styled from "styled-components";


export const Nav = styled.nav`
  background: black;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 5px;
  max-width: 1100px;
  background: black;
`;
export const NavH1 = styled.h1`
  font-size: 14px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  margin: auto;
  align-items: center;

  &.active {
    color: #c13b3a;
  }
`;
export const NavH2 = styled.h2`
  font-size: 14px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  margin-left: 10px;
  align-items: center;

  &.active {
    color: #c13b3a;
    font-weight: 800;
  }
`;
export const NavText = styled.h3`
font-size: 20px;
color: white;
font-weight: 800;
margin-left: 10px;
align-items: center;


`