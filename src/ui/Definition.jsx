import BulletPoint from "./BulletPoint";

function Definition({ type, darkMode, definitions, synonyms }) {
  const listStyle = `font-normal text-[0.9375rem] sm:text-lg flex items-start gap-6 ${
    darkMode ? "text-white" : "text-[var(--dark)]"
  }`;
  const titleStyle = "text-base sm:text-xl text-[var(--dark-grey)] font-normal";

  return (
    <section className={`flex flex-col gap-6 ${darkMode && "text-white"}`}>
      <div className="flex justify-between items-center sm:gap-8">
        <p className="text-lg sm:text-2xl font-bold">{type}</p>
        <div
          className={`w-[70vw] sm:w-[85vw] h-[0.0625rem] ${
            darkMode ? "bg-[var(--line)]" : "bg-[var(--grey)]"
          } `}
        ></div>
      </div>
      <p className={`${titleStyle}`}>Meaning</p>
      <ul className="flex flex-col gap-4 sm:pr-20 md:pr-0 sm:pl-8">
        {definitions.map((d, index) => (
          <li className={listStyle} key={index}>
            <p className="mt-[0.6rem]">
              <BulletPoint />
            </p>
            <p>{d.definition}</p>
          </li>
        ))}
      </ul>
      {synonyms.length !== 0 && (
        <div className="flex items-start gap-10">
          <p className={titleStyle}>Synonyms</p>
          <p className="font-bold text-[var(--purple)] sm:text-xl">
            {synonyms.map(
              (s, index) => `${s}${index < synonyms.length - 1 ? ", " : ""}`
            )}
          </p>
        </div>
      )}
    </section>
  );
}

export default Definition;
