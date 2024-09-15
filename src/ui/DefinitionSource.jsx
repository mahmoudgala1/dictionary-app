import { useDictionary } from "../contexts/DictionaryContext";

function DefinitionSource({ darkMode, sourceUrl }) {
  const { isLoading, error, searchedWord } = useDictionary();
  return isLoading || error ? null : !sourceUrl || !searchedWord ? null : (
    <li className="flex flex-col sm:flex-row sm:gap-5 gap-1">
      <p className="underline text-sm text-[var(--dark-grey)] font-normal">
        Source
      </p>
      <div className="flex items-center gap-3">
        <a
          href={sourceUrl}
          className={`text-sm font-normal ${
            darkMode ? "text-white" : "text-[var(--dark)]"
          }`}
          target="_blank"
          rel="noreferrer"
        >
          {sourceUrl}
        </a>
        <a href={sourceUrl} target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              fill="none"
              stroke="#838383"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
            />
          </svg>
        </a>
      </div>
    </li>
  );
}

export default DefinitionSource;
