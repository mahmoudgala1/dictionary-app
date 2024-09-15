import { useDictionary } from "../contexts/DictionaryContext";

function Attribution() {
  const { searchedWord, error } = useDictionary();
  return (
    <footer
      className={`attribution flex items-end justify-center sm:justify-center ${
        searchedWord && !error
          ? "pt-5"
          : "fixed bottom-2 sm:left-1/2 sm:-translate-x-1/2 w-screen -ml-6"
      } `}
    >
      Challenge by&nbsp;
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://github.com/mahmoudgala1/dictionary-app">
        &nbsp;Mahmoud Galal
      </a>
      .
    </footer>
  );
}

export default Attribution;
