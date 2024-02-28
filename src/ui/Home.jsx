import useSearch from "../services/useSearch";

function Home() {
  const [query, stockList, dispatch] = useSearch();
  // console.log(dispatch);
  return (
    <div>
      <div className="flex justify-center m-5">
        <input
          type="option"
          placeholder="Search halal stocks"
          value={query}
          className="w-80 rounded-full border-4 outline-slate-900	 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400"
          onChange={(e) =>
            dispatch({ type: "setQuery", payload: e.target.value })
          }
        />
      </div>
      <ul className="text-center">
        {stockList.map((stock) => (
          <li value={stock.id} key={stock.id}>
            {stock.name}---{stock.id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
