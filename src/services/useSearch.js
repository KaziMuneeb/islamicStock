import { useEffect, useReducer, useState } from "react";

const BASE_SEARCH_API = `https://www.screener.in/api/company/search/?q=`;
const intialState = {
  query: "",
  stockList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "setQuery":
      return { ...state, query: action.payload };
    case "dataReceived":
      return { ...state, stockList: action.payload };
    default:
      throw new Error("something went wrong");
  }
}
export default function useSearch() {
  const [{ query, stockList }, dispatch] = useReducer(reducer, intialState);

  useEffect(
    function () {
      async function getStockList() {
        try {
          const res = await fetch(BASE_SEARCH_API + `${query}`);
          const data = await res.json();
          if (!res.ok) throw new Error("Something went wrong!");
          dispatch({ type: "dataReceived", payload: data });
        } catch (err) {
          dispatch({ type: "error", payload: err.message });
        }
      }
      getStockList();
    },
    [query]
  );
  return [query, stockList, dispatch];
}
