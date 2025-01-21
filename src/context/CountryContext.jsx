import { createContext, useContext, useEffect, useReducer } from "react";
import { ALL_COUNTRIES } from "../utils/endpoints";

const CountryContext = createContext();

const initialState = {
  isLoading: false,
  isSearching: false,
  countryData: [],
  filteredData: [],
  error: "",
  curRegion: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };

    case "START":
      return {
        ...state,
        countryData: action.payload,
        filteredData: action.payload,
        isLoading: false,
      };

    case "ERROR":
      return { ...state, error: action.payload, isLoading: false };

    case "FILTER":
      return {
        ...state,
        curRegion: action.payload,
        filteredData:
          action.payload === "All"
            ? state.countryData
            : state.countryData.filter(
                (country) => country.region === action.payload
              ),
      };

    case "SEARCH":
      return { ...state, filteredData: action.payload };

    case "QUERYING":
      return { ...state, isSearching: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

export default function CountryDataProvider({ children }) {
  const [
    { countryData, filteredData, isLoading, error, curRegion, isSearching },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getAllCountryData() {
      try {
        dispatch({ type: "LOADING" });
        const res = await fetch(`${ALL_COUNTRIES}`);
        const data = await res.json();
        dispatch({ type: "START", payload: data });
      } catch (error) {
        dispatch({
          type: "ERROR",
          payload: "Somehing went wrong while fetching the country data",
        });
      }
    }
    getAllCountryData();
  }, []);

  return (
    <CountryContext.Provider
      value={{
        countryData,
        filteredData,
        isLoading,
        isSearching,
        error,
        curRegion,
        dispatch,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

export function useCountryData() {
  const context = useContext(CountryContext);
  if (!context)
    throw new Error(
      "useCountryData hook should be used inside CountryDataProvider"
    );
  return context;
}
