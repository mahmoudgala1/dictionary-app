import { createContext, useCallback, useContext, useReducer } from "react";
const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const DictionaryContext = createContext();

function DictionaryProvider({ children }) {
  const initialState = {
    isLoading: false,
    searchedWord: "",
    phonetic: "",
    phonetics: [],
    meanings: [],
    sourceUrls: [],
    error: null,
    errorType: null,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "loading":
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case "dictionary/get":
        return {
          ...state,
          isLoading: false,
          searchedWord: action.payload.word,
          phonetic: action.payload.phonetic,
          phonetics: action.payload.phonetics,
          meanings: action.payload.meanings,
          sourceUrls: action.payload.sourceUrls,
        };
      case "rejected":
        return {
          ...state,
          error: action.payload,
          // errorType: null,
          isLoading: false,
        };
      case "error/emptyInput":
        return {
          ...state,
          error: action.payload,
          errorType: "emptyField",
          isLoading: false,
        };
      case "reset":
        return {
          ...state,
          searchedWord: "",
          phonetic: "",
          phonetics: [],
          meanings: [],
          sourceUrls: [],
          error: null,
          errorType: null,
        };
      default:
        throw new Error("Undefined action");
    }
  }
  const [
    {
      isLoading,
      searchedWord,
      phonetic,
      phonetics,
      meanings,
      sourceUrls,
      error,
      errorType,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const getDictionary = useCallback(
    async function getDictionary(word) {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${API_URL}${word}`);
        if (!res.ok) throw Error();
        const data = await res.json();
        dispatch({
          type: "dictionary/get",
          payload: data[0],
        });
      } catch {
        dispatch({
          type: "rejected",
          payload: "Failed to get dictionary result",
        });
        // throw Error("Failed to get dictionary result");
      }
    },
    []
    //   async function getCurrentCity(id) {
    //     if (Number(id) === currentCity.id) return;

    //     dispatch({
    //       type: "loading",
    //     });
    //     try {
    //       const res = await fetch(`${BASE_URL}/cities/${id}`);
    //       if (!res.ok) throw new Error();
    //       const data = await res.json();
    //       if (data.Response === "False") throw new Error();
    //       dispatch({
    //         type: "cities/currentCity",
    //         payload: data,
    //       });
    //     } catch {
    //       dispatch({
    //         type: "rejected",
    //         payload: "There was an error loading data",
    //       });
    //     }
    //   },
  );

  return (
    <DictionaryContext.Provider
      value={{
        isLoading,
        searchedWord,
        phonetic,
        phonetics,
        meanings,
        sourceUrls,
        error,
        errorType,
        getDictionary,
        dispatch,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
}

function useDictionary() {
  const context = useContext(DictionaryContext);
  if (context === undefined) throw new Error("useDictionary is undefined ");
  return context;
}

export { DictionaryProvider, useDictionary };
