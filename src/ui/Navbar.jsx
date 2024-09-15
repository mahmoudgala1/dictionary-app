import FontMenu from "./FontMenu";

function Navbar({
  darkMode,
  onToggleDarkMode,
  onSelectFontFamily,
  fontFamily,
}) {
  function toggleDarkMode() {
    onToggleDarkMode(!darkMode);
  }
  return (
    <nav>
      <ul className="flex justify-between items-center">
        <li>
          <img src="./images/logo.svg" alt="Dictionary logo" />
        </li>
        <li className="flex gap-3 sm:gap-5 justify-between items-center">
          <FontMenu
            darkMode={darkMode}
            onSelectFontFamily={onSelectFontFamily}
            fontFamily={fontFamily}
          />
          <div className="w-[0.0625rem] h-8 bg-[var(--grey)]"></div>
          <label className="switch" htmlFor="dark-mode">
            <input
              type="checkbox"
              onChange={toggleDarkMode}
              checked={darkMode}
              aria-label="dark-mode"
              id="dark-mode"
            />
            <span className="slider round"></span>
          </label>
          <span className="cursor-pointer toggle-icon-on-hover">
            <img
              src={
                darkMode
                  ? "./images/icon-moon-purple.svg"
                  : "./images/icon-moon.svg"
              }
              alt="dark mode toggle"
              onClick={toggleDarkMode}
              className="icon-hide"
            />
            <img
              src="./images/icon-moon-purple.svg"
              alt="dark mode toggle"
              onClick={toggleDarkMode}
              className="icon-display"
            />
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
