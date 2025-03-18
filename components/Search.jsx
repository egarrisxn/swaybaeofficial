"use client";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { SEARCH_QUERY } from "../utils/sanity/queries";
import { client } from "../utils/sanity/client";
import { Icon } from "./ui/icon";

export function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = useDebouncedCallback(async (term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);

    console.log("Fetching search results...");
    if (term) {
      try {
        console.log("Search term:", term);
        const response = await client.fetch(SEARCH_QUERY, { term });
        setSearchResults(response);
        console.log("Search results:", response);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
    }
  }, 300);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!document.getElementById("search").contains(event.target)) {
        setSearchResults([]);
      }
    }

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    console.log("Input value:", value);
    console.log("Input length:", value.length);
    setSearchTerm(value);
    if (value.length >= 3) {
      handleSearch(value);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="relative z-20">
      <div className="border-gray-light focus:border-3 flex items-center space-x-2 rounded-md border-2 bg-background p-2 shadow-soft hover:shadow-hard">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          className="placeholder:text-gray-light w-40 appearance-none bg-background outline-none sm:w-auto"
          placeholder={placeholder}
          onChange={handleChange}
          value={searchTerm}
        />
        <Icon.Search />
      </div>
      {searchResults.length > 0 && (
        <div className="absolute left-0 top-full my-1 w-full overflow-y-auto rounded-md border tracking-tight shadow 2xl:text-base">
          <p className="rounded-t bg-[#000000] bg-opacity-80 text-center font-semibold text-w2b dark:bg-[#ffffff]">
            Search Results
          </p>
          <hr />
          <ul>
            {searchResults.map((result) => (
              <li
                key={result._id}
                className="inline-flex w-full justify-start transition ease-in-out odd:bg-light-tint even:bg-gray-fade dark:odd:bg-dark-fade dark:even:bg-neutral"
              >
                <Link
                  href={`/blog/post/${result.slug.current}`}
                  className="w-full border-t px-1.5 py-2 hover:border-black hover:text-primary dark:hover:border-white"
                >
                  {result.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
