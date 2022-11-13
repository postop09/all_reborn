import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {Icon16, Img24, Img40} from "../../style/style";
import { useNavigate } from "react-router-dom";
import ILogo from "../../assets/image/img_logo.png";
import ITitle from "../../assets/image/img_title.png";
import ISearch from "../../assets/icon/icon_search.png";
import * as enums from "../../const/enums";
import {AppContext} from "../../context/AppContext";

const Header = () => {
  const navigate = useNavigate();
  const { ROUTES } = enums;
  const { setRecentKeyword } = useContext(AppContext);
  const [pathName, setPathName] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const pathName = window.location.pathname;
    setPathName(pathName);
  }, [window.location.pathname]);

  // 검색
  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searched!!");
    pushRecentKeyword();
  };

  // TODO - ContextAPI 를 이용해서 검색값, 검색 결과, 검색어를 컨트롤 해야할 듯
  const pushRecentKeyword = () => {
    const storage = localStorage.getItem("recentKeyword");

    if (storage) {
      const arr = JSON.parse(storage);
      arr.push(search);
      localStorage.setItem("recentKeyword", JSON.stringify(arr));
      setRecentKeyword(arr);
    }
  }

  return (
    <HeaderWrapper>
      <HiddenTitle>새활용은 올리본</HiddenTitle>
      <Ul>
        <li>
          <button type="button" onClick={() => navigate("/")}>
            <Img40 src={ILogo} alt="" />
          </button>
        </li>
        {pathName !== ROUTES.SEARCH ? (
          <>
            <li>
              <ImgTitle src={ITitle} alt="올리본" />
            </li>
            <li>
              <button type="button" onClick={() => navigate("/search")}>
                <Img24 src={ISearch} alt="검색" />
              </button>
            </li>
          </>
        ) : (
          <LiSearch>
            <form onSubmit={onSearch}>
              <label htmlFor="inp_search">검색</label>
              <input
                type="search"
                id="inp_search"
                name="search"
                placeholder="검색어를 입력해주세요."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">
                <Icon16 src={ISearch} alt="검색" />
              </button>
            </form>
          </LiSearch>
        )}
      </Ul>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  box-shadow: 0px 5px 7px 2px #00000020;
  width: 100%;
  max-width: 428px;
  background: white;
  z-index: 1000;
`;

const HiddenTitle = styled.h1`
  ${({ theme }) => theme.TEXT.hide};
`;

const ImgTitle = styled.img`
  width: 110px;
  height: 30px;
`

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
    ${({ theme }) => theme.TEXT.hide};
  }

  input {
    display: block;
    border: none;
    border-radius: ${({ theme }) => theme.ROUND.md};
    background: ${({ theme }) => theme.COLOR.keyWhite};
    width: 100%;
    padding: 10px 16px 10px calc(16px + 16px + 8px);
    ${({ theme }) => theme.TEXT.labelMd}
  }
`;
