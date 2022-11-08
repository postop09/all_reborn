import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon16} from "../../style/style";

const Header = () => {
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    const pathName = window.location.pathname;
    setPathName(pathName);
  }, [window.location.pathname]);

  const openSearch = () => {

  }

  return (
    <HeaderWrapper>
      <HiddenTitle>새활용은 올리본</HiddenTitle>
      <Ul>
        <li>
          <img src={require("../../assets/image/img_logo.png")} alt=""/>
        </li>
        {pathName !== "/search" ?
          <>
            <li>
              <img src={require("../../assets/image/img_title.png")} alt=""/>
            </li>
            <li>
              <button type="button">
                <img src={require("../../assets/icon/icon_search.png")} alt="검색"/>
              </button>
            </li>
          </>
          :
          <LiSearch>
            <form action="">
              <label htmlFor="inp_search">검색</label>
              <input type="search" id="inp_search" placeholder="검색어를 입력해주세요."/>
              <button type="submit">
                <Icon16 src={require("../../assets/icon/icon_search.png")} alt="검색"/>
              </button>
            </form>
          </LiSearch>
        }
      </Ul>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  max-width: 428px;
  margin: auto;
  background: white;
`;

const HiddenTitle = styled.h1`
  ${({theme}) => theme.TEXT.hide};
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 16px;
`;

const LiSearch = styled.li`
  width: 100%;
  margin-left: 8px;
  form {
    position: relative;
  }
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
  }
  label {
    ${({theme}) => theme.TEXT.hide};
  }
  input {
    display: block;
    border: none;
    border-radius: ${({theme}) => theme.ROUND.md};
    background: ${({theme}) => theme.COLOR.keyWhite};
    width: 100%;
    padding: 10px 16px 10px calc(16px + 16px + 8px);
    ${({theme}) => theme.TEXT.labelMd}
  }
`;

