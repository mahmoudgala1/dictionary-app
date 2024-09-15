function Container({ children, darkMode, fontFamily }) {
  return (
    <div
      className={` min-h-screen p-6 sm:px-10 md:px-15 lg:px-40 xl:px-80 sm:pt-12 flex flex-col gap-6 sm:gap-10 justify-start ${fontFamily} font-bold text-base ${
        darkMode ? "bg-[var(--dark-bg)] text-white" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Container;
