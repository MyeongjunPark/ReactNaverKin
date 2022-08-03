import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
const Wrap = styled.div`
  margin: 0 auto;
  margin-top: 20px;
`;
const SearchBox = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(30, 202, 73);
  margin-bottom: 20px;

  @media screen and (max-width: 400px) {
    width: 350px;
  }
`;
const SearchInput = styled.input`
  width: 1000px;
  height: 50px;
  font-size: 23px;
  font-weight: bold;
  border: 0;
  outline: none;
  padding-left: 10px;
  padding-bottom: 5px;
  box-sizing: border-box;
  background-color: white;
  @media screen and (max-width: 400px) {
    width: 250px;
  }
`;
const SearchBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-top: 3px;
    width: 45px;
    height: 45px;
  }
`;
const LogoBox = styled.div`
  width: 45px;
  height: 45px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-top: 5px;
    width: 50px;
    height: 50px;
  }
`;
function InputComp({ value }) {
  const [searchValue, setSearchValue] = useState("");
  const searchText = (e) => {
    setSearchValue(e.target.value);
  };

  const enterClick = (e) => {
    if (e.code == "Enter") {
      window.location.href = `/search?searchText=${searchValue}`;
    }
  };
  return (
    <Wrap>
      <SearchBox>
        <LogoBox>
          <Link to={"/"}>
            <img src="/img/logo.png" alt="logo" />
          </Link>
        </LogoBox>
        <SearchInput value={value} type="text" onChange={searchText} onKeyPress={enterClick} />
        <SearchBtn>
          <Link to={`/search?searchText=${searchValue}`}>
            <img src="/img/inputsearch.png" alt="검색" />
          </Link>
        </SearchBtn>
      </SearchBox>
    </Wrap>
  );
}

export default InputComp;
