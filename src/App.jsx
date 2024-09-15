import { useEffect, useState } from "react";
import Container from "./ui/Container";
import HorizontalLine from "./ui/HorizontalLine";
import Navbar from "./ui/Navbar";
import SearchInput from "./ui/SearchInput";
import Word from "./ui/Word";
import { useDictionary } from "./contexts/DictionaryContext";
import Definitions from "./ui/Definitions";
import DefinitionSources from "./ui/DefinitionSources";
import Error from "./ui/Error";
import Attribution from "./ui/Attribution";

function App() {
  const [darkMode, setDarkMode] = useState(getInitialColorScheme);
  const [fontFamily, setFontFamily] = useState("font-[Inconsolata]");
  const { error, errorType } = useDictionary();

  function getInitialColorScheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : false;
  }

  function handleColorSchemeChange(event) {
    setDarkMode(event.matches ? true : false);
  }

  useEffect(() => {
    const colorSchemeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    colorSchemeMediaQuery.addEventListener("change", handleColorSchemeChange);

    handleColorSchemeChange(colorSchemeMediaQuery);

    return () => {
      colorSchemeMediaQuery.removeEventListener(
        "change",
        handleColorSchemeChange
      );
    };
  }, []);

  return (
    <Container darkMode={darkMode} fontFamily={fontFamily}>
      <Navbar
        onToggleDarkMode={setDarkMode}
        darkMode={darkMode}
        onSelectFontFamily={setFontFamily}
        fontFamily={fontFamily}
      />
      <SearchInput darkMode={darkMode} />
      {error ? (
        <Error type={errorType} />
      ) : (
        <>
          <Word darkMode={darkMode} />
          <Definitions darkMode={darkMode} />
          <HorizontalLine darkMode={darkMode} />
          <DefinitionSources darkMode={darkMode} />
        </>
      )}
      <Attribution />
    </Container>
  );
}

export default App;
