import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  margin: 0 auto;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
`;
const Title = styled.div`
  font-size: 50px;
  color: rgb(30, 202, 73);
  font-weight: bold;
  margin-bottom: 10px;

  @media screen and (max-width: 400px) {
    font-size: 40px;
    color: rgb(30, 202, 73);
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
const SearchBox = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
`;
const SearchInput = styled.input`
  width: 550px;
  height: 50px;
  font-size: 25px;
  border: 3px solid rgb(30, 202, 73);
  outline: none;
  padding-left: 10px;
  box-sizing: border-box;
  background-color: white;
  font-weight: bold;

  @media screen and (max-width: 400px) {
    width: 320px;
    height: 50px;
    font-size: 20px;
    border: 3px solid rgb(30, 202, 73);
    outline: none;
    padding-left: 10px;
    box-sizing: border-box;
    background-color: white;
    font-weight: bold;
  }
`;
const SearchBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgb(30, 202, 73);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-top: 3px;
    width: 30px;
    height: 30px;
  }
`;
const Mysite = styled.div`
  margin-top: 20px;
  width: 594px;
  height: 50px;
  border-left: 3px solid rgb(30, 202, 73);
  border-right: 3px solid rgb(30, 202, 73);
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  a {
    color: #505050;
    text-decoration: none;
  }
  img {
    width: 40px;
    height: 40px;
  }
  span {
    width: 60px;
    display: block;
  }

  @media screen and (max-width: 400px) {
    width: 350px;
    margin-top: 20px;
    height: 50px;
    border-left: 2px solid rgb(30, 202, 73);
    border-right: 2px solid rgb(30, 202, 73);
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    left: 122px;
  }
`;
function Home() {
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
      <Title>NAVER 지식IN</Title>
      <SearchBox>
        <SearchInput type="text" onChange={searchText} onKeyPress={enterClick} />
        <SearchBtn>
          <Link to={`/search?searchText=${searchValue}`}>
            <img src="/img/search.png" alt="검색" />
          </Link>
        </SearchBtn>
      </SearchBox>
      <Mysite>
        <a href="https://bit.ly/3Q2Miuo" target="_blank">
          <img src="img/notion.png" alt="포트폴리오" title="포트폴리오" />
          <span>Portfolio</span>
        </a>
        <a href="https://mjooon.tistory.com/" target="_blank">
          <img src="img/blog.png" alt="블로그" title="블로그" />
          <span>Blog</span>
        </a>
        <a href="https://github.com/MyeongjunPark" target="_blank">
          <img src="img/github.png" alt="GitHub" title="깃허브" />
          <span>GitHub</span>
        </a>
      </Mysite>
    </Wrap>
  );
}

export default Home;
