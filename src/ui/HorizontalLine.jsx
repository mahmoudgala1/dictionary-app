import { useDictionary } from "../contexts/DictionaryContext";

function HorizontalLine({ darkMode }) {
  const { isLoading, error, searchedWord } = useDictionary();
  return isLoading || error ? null : searchedWord ? (
    <div
      className={`w-full h-[0.0625rem] ${
        darkMode ? "bg-[var(--line)]" : "bg-[var(--grey)]"
      } `}
    ></div>
  ) : null;
}

export default HorizontalLine;
