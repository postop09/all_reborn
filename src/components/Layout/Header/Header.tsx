import React, { useContext, useEffect, useState } from "react";
import { Icon16, Img24, Img40 } from "../../../style/style";
import { useNavigate } from "react-router-dom";
import ILogo from "../../../assets/image/img_logo.png";
import ITitle from "../../../assets/image/img_title.png";
import ISearch from "../../../assets/icon/icon_search.png";
import IReturn from "../../../assets/icon/icon_return.png";
import * as enums from "../../../const/routes";
import { AppContext } from "../../../context/AppContext";
import getQuery from "../../../util/getQuery";
import * as S from "./Header.style";

const Header = () => {
  const navigate = useNavigate();
  const { ROUTES } = enums;
  const { setRecentKeyword, setSearchList, setSearchCase }: any = useContext(AppContext);
  const [pathName, setPathName] = useState("");
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState<string | null>("");

  useEffect(() => {
    const pathName = window.location.pathname;
    setPathName(pathName);
    setTitle(getQuery());
  }, [getQuery(), window.location.pathname]);

  // 검색
  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    pushRecentKeyword();
    fetchSearchList(search);
    setSearch("");
  };

  const pushRecentKeyword = () => {
    const storage = localStorage.getItem("recentKeyword");

    if (storage) {
      const arr = JSON.parse(storage);
      const filter = arr.filter((item: string) => item !== search);
      filter.push(search);
      localStorage.setItem("recentKeyword", JSON.stringify(filter));
      setRecentKeyword(filter);
    }
  };

  const fetchSearchList = async (path: string) => {
    try {
      const res = await fetch(`/${path}`);
      const json = await res.json();
      const data = json.data;
      if (data.length === 0) {
        setSearchList([path]);
        setSearchCase("noData");
      } else {
        setSearchList(data);
        setSearchCase("hasData");
      }
    } catch (e) {
      setSearchList([path]);
      setSearchCase("noData");
    }
  };

  return (
    <S.HeaderWrapper>
      <S.HiddenTitle>새활용은 올리본</S.HiddenTitle>
      <S.Ul>
        <li>
          {pathName !== ROUTES.DETAIL ? (
            <button type="button" onClick={() => navigate("/")}>
              <Img40 src={ILogo} alt="올리본 홈으로 이동" />
            </button>
          ) : (
            <button type="button" onClick={() => navigate(-1)}>
              <Img40 src={IReturn} alt="뒤로가기" />
            </button>
          )}
        </li>
        {pathName !== ROUTES.SEARCH ? (
          <>
            <li>{title ? <S.TxtTitle>{title}</S.TxtTitle> : <S.ImgTitle src={ITitle} alt="올리본" />}</li>
            <li>
              <button type="button" onClick={() => navigate("/search")}>
                <Img24 src={ISearch} alt="검색" />
              </button>
            </li>
          </>
        ) : (
          <S.LiSearch>
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
          </S.LiSearch>
        )}
      </S.Ul>
    </S.HeaderWrapper>
  );
};

export default Header;
