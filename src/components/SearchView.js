import styled from "styled-components";
import { Link } from "react-router-dom";
import Parser from "html-react-parser";

const Wrap = styled.div`
  width: 1000px;
  margin-top: 20px;
  margin-bottom: 10px;

  @media screen and (max-width: 400px) {
    width: 350px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const Title = styled.div`
  width: 800px;
  height: 30px;
  font-size: 23px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  b {
    font-weight: bold;
  }
  img {
    width: 40px;
    height: 40px;
  }
  a {
    color: #0c43b7;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 400px) {
    width: 300px;
    height: 30px;
    font-size: 23px;
  }
`;
const Description = styled.div`
  width: 800px;
  height: 80px;
  position: relative;
  margin-left: 30px;
  padding-top: 18px;
  box-sizing: border-box;
  border-bottom: 1px solid lightgray;
  a {
    color: #505050;
    text-decoration: none;
    font-size: 18px;
  }
  a:hover {
    text-decoration: underline;
  }
  b {
    font-weight: bold;
  }
  ::before {
    content: "";
    position: absolute;
    top: 3px;
    left: -15px;
    bottom: 10px;
    width: 3px;
    background-color: lightgray;
  }

  @media screen and (max-width: 400px) {
    width: 300px;
    height: 150px;
    padding-right: 20px;
    border-bottom: 1px solid lightgray;
  }
`;
function SearchView({ title, description, link }) {
  return (
    <Wrap>
      <Title>
        <img src="img/question.png" alt="icon" />
        <a href={`${link}`} target="_blank">
          {Parser(title)}
        </a>
      </Title>
      <Description>
        <a href={`${link}`} target="_blank">
          {Parser(description)}
        </a>
      </Description>
    </Wrap>
  );
}

export default SearchView;
