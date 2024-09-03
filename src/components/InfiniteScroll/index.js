import React, { useCallback, useReducer, useState } from "react";
import InfiniteScrollList from "./components/InfiniteScrollList";

function InfiniteScroll() {
  const [query, setQuery] = useState("");
  const [listData, setListData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1); // Changed to useState
  const [loading, setLoading] = useState(false);
  const getData = async (value,pageNumber) => {
    try {
      setLoading(true);
      let response = await fetch(
        `https://openlibrary.org/search.json?q=${value}&page=${pageNumber}`
      );
      let data = await response.json();
      console.log(data);
      setListData((prevData) => [...prevData, ...data.docs]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const debounce = (fun) => {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fun.apply(this, args);
      }, 3000);
    };
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    setListData([]);
    setLoading(true);
    debouncedGetData(e.target.value,pageNumber);
  };
  const debouncedGetData = useCallback(debounce(getData), [pageNumber]);
  return (
    <div>
      <div>Infinite Scroll</div>
      <div>
        <div className="">
          <input type="text" value={query} onChange={handleChange} />
        </div>
        <div>
          <InfiniteScrollList
            listData={listData}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            getData={getData}
            query={query}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default InfiniteScroll;
