import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import styled from "styled-components";

import InputComp from "./InputComp";
import SearchView from "./SearchView";

const Wrap = styled.div`
  margin: 0 auto;
  width: 1000px;
  margin-bottom: 40px;

  @media screen and (max-width: 400px) {
    width: 350px;
    margin-bottom: 20px;
  }
`;
const ViewBox = styled.div`
  width: 1000px;
  background-color: #fff;
  border: 1px solid lightgray;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  padding-left: 50px;

  @media screen and (max-width: 400px) {
    width: 350px;

    padding: 10px;
  }
`;

function Search() {
  const NAVER_ID = process.env.REACT_APP_NAVER_ID;
  const NAVER_SECRET = process.env.REACT_APP_NAVER_SECRET;

  // const NAVER_ID = "r6Rpfawa0h9D83pxtElt";
  // const NAVER_SECRET = "ZUbpRlzVsR";

  const [searchData, setSearchData] = useState([]);

  const location = useLocation();
  const searchParse = queryString.parse(location.search);
  const searchText = searchParse.searchText;

  const getKin = async (searchText) => {
    const searchKin = await axios({
      method: "get",
      url: `https://mjooon-proxy.herokuapp.com/https://openapi.naver.com/v1/search/kin.json?query=${searchText}&display=20`,
      dataType: "json",
      headers: {
        "X-Naver-Client-Id": NAVER_ID,
        "X-Naver-Client-Secret": NAVER_SECRET,
      },
    });
    setSearchData(searchKin.data.items);
  };
  useEffect(() => {
    getKin(searchText);
  }, []);

  const result = searchData.map((data, index) => <SearchView key={index} title={data.title} description={data.description} link={data.link} />);
  return (
    <Wrap>
      <InputComp value={searchText} />
      <ViewBox>{result}</ViewBox>
    </Wrap>
  );
}

export default Search;
