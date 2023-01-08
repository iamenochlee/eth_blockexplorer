"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSearch(e: any) {
    if (e.key === "Enter") {
      if (query.length === 66) {
        router.push(`/tx/${query}`);
        setQuery("");
        setError("");
      } else if (query.length === 42) {
        router.push(`/address/${query}`);
        setQuery("");
        setError("");
      } else {
        setError("Invalid Input");
      }
    }
  }
  return (
    <>
      <input
        className="w-72 focus:w-[18.5rem] relative xl:w-96 h-9 xl:h-12 px-3 text-sm xl:text-base xl:px-4 xl:py-2 text-white bg-[#151922] xl:focus:w-[26rem] ease-out duration-100"
        type="text"
        value={query}
        onChange={(e) => {
          const value = e.target.value;
          setQuery(value);
          if (value.length === 42 || value.length === 66) {
            setError("");
          }
        }}
        onKeyDown={(e) => handleSearch(e)}
        placeholder="Search Transactions, Address...."
      />
      <p className="text-red-500 absolute top-[5.5rem]">{error}</p>
    </>
  );
};

export default Search;
