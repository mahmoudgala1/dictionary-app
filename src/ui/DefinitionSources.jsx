import { useDictionary } from "../contexts/DictionaryContext";
import DefinitionSource from "./DefinitionSource";

function DefinitionSources({ darkMode }) {
  const { sourceUrls } = useDictionary();
  return (
    <ul>
      {sourceUrls.map((source, index) => (
        <DefinitionSource key={index} darkMode={darkMode} sourceUrl={source} />
      ))}
    </ul>
  );
}

export default DefinitionSources;
