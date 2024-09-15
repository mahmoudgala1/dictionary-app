import { useDictionary } from "../contexts/DictionaryContext";
import Loader from "./Loader";

function Word({ darkMode }) {
  const { searchedWord, phonetic, phonetics, isLoading, error } =
    useDictionary();

  function playAudio() {
    const audios = phonetics.filter((p) => p.audio !== "");
    if (audios) {
      const wordAudio = audios[0].audio;
      const audio = wordAudio && new Audio(wordAudio);
      audio.play();
    }
  }
  return isLoading ? (
    <Loader />
  ) : error ? null : !searchedWord ? null : (
    <section className="flex justify-between sm:mt-8 sm:mb-2">
      <div className="flex flex-col justify-between gap-4 sm:gap-8">
        <p
          className={`${
            darkMode ? "text-white" : ""
          } text-[var(--dark)] text-[2rem] sm:text-[4rem] font-bold`}
        >
          {isLoading ? <Loader /> : searchedWord}
        </p>
        <p className="text-[var(--purple)] text-lg sm:text-2xl leading-6 font-normal font-[Inter]">
          {phonetic}
        </p>
      </div>
      <span
        className="py-2 cursor-pointer toggle-icon-on-hover"
        onClick={playAudio}
      >
        <img
          src="./images/icon-play.svg"
          alt="play button"
          className="w-[50px] sm:w-[4.6875rem] icon-hide"
        />
        <img
          src="./images/icon-play-purple.svg"
          alt="play button"
          className="w-[50px] sm:w-[4.6875rem] icon-display"
        />
      </span>
    </section>
  );
}

export default Word;
