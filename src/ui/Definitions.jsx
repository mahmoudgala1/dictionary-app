import { useDictionary } from "../contexts/DictionaryContext";
import Definition from "./Definition";

function Definitions({ darkMode }) {
  const { isLoading, meanings, error } = useDictionary();
  return isLoading || error
    ? null
    : meanings.map((m, index) => (
        <Definition
          key={index}
          darkMode={darkMode}
          type={m.partOfSpeech}
          definitions={m.definitions}
          synonyms={m.synonyms}
        />
      ));
}

export default Definitions;
