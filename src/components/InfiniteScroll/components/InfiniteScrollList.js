import React, { useCallback, useEffect, useRef } from "react";

function InfiniteScrollList({
  listData,
  pageNumber,
  setPageNumber,
  getData,
  query,
  loading,
  setLoading,
}) {
  const observer = useRef(null);
  const lastElementObserver = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNumber(pageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  });
  useEffect(() => {
    if (query) getData(query, pageNumber);
  }, [pageNumber]);
  return (
    <div>
      {listData?.map((data, index) => {
        if (index === listData.length - 1)
          return (
            <div key={index} ref={lastElementObserver}>
              {data?.title}
            </div>
          );
        return (
          <div key={index} ref={null}>
            {data?.title}
          </div>
        );
      })}
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default InfiniteScrollList;
