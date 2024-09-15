import { useState } from "react";
import { useDictionary } from "../contexts/DictionaryContext";

function SearchInput({ darkMode }) {
  const { getDictionary, dispatch, error, errorType } = useDictionary();
  const [word, setWord] = useState("");

  function searchDefinition() {
    word
      ? getDictionary(word)
      : dispatch({
          type: "error/emptyInput",
          payload: "Whoops, can’t be empty…",
        });
  }

  function enterInput(e) {
    error && dispatch({ type: "reset" });
    setWord(e.target.value);
  }

  const handleKeyDown = (event) => {
    // Check if the pressed key is Enter (keyCode 13)
    if (event.key === "Enter") {
      // Call the function that should be triggered on Enter
      searchDefinition();
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="grid grid-cols-8 sm:grid-cols-12 grid-rows-1">
        <div
          className={`${
            darkMode
              ? "bg-[var(--input-bg-dark)] text-white"
              : "bg-[var(--light-grey-2)]"
          } active:border border-solid border-[var(--purple)] row-start-1 col-start-1 col-span-full h-12 rounded-2xl pl-5 grid grid-cols-8 input-parent ${
            errorType && "border border-[var(--red)]"
          }`}
        >
          <input
            type="text"
            className="bg-transparent row-start-1 col-start-1 col-span-7 z-10 pr-3 md:pl-1 focus:outline-none"
            value={word}
            onChange={(e) => enterInput(e)}
            onKeyDown={handleKeyDown}
            aria-label="search"
          />
        </div>

        <span
          className="col-start-8 sm:col-start-12 sm:ml-5 col-span-1 row-start-1 my-auto z-10 cursor-pointer"
          onClick={searchDefinition}
        >
          <img src="./images/icon-search.svg" alt="Search icon" />
        </span>
      </div>
      <p className=" text-[var(--red)] sm:text-xl font-normal text-sm">
        {errorType === "emptyField" && error}
      </p>
    </div>
  );
}

export default SearchInput;
