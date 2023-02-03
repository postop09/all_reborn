import React from "react";
import { Icon16, Img24, Img40 } from "../../../style/style";
import ILogo from "../../../assets/image/img_logo.png";
import ITitle from "../../../assets/image/img_title.png";
import ISearch from "../../../assets/icon/icon_search.png";
import IReturn from "../../../assets/icon/icon_return.png";
import { ROUTES } from "../../../const/routes";
import * as S from "./Header.style";
import useSetPathName from "../../../hooks/components/layout/useSetPathName";
import useRecentKeyword from "../../../hooks/components/layout/useRecentKeyword";
import useHeader from "../../../hooks/components/layout/useHeader";

const Header = () => {
  const { pathName, navigate } = useSetPathName();
  const { search, setSearch, pushRecentKeyword } = useRecentKeyword();
  const { title, fetchSearchList } = useHeader();

  // 검색
  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    pushRecentKeyword();
    fetchSearchList(search);
    setSearch("");
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
