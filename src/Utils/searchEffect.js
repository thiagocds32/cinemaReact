import React, { useEffect } from "react";

const SearchEffect = ({ changeState, params, location }) => {
  return useEffect(() => {
    const search = params.search;
    if (search === undefined) return;
    changeState();
  }, [location.pathname]);
};

export default SearchEffect;
