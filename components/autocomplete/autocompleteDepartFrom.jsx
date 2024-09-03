"use client";

import { useState, useEffect } from "react";
import { callSearchAirport } from "@/lib/call-api/callSearchAirport";
import { Input } from "../ui/input";
import styles from "./AutocompleteSearch.module.css";

const AutocompleteDepartFrom = ({ airport }) => {
  const [query, setQuery] = useState("");
  const [airportDepartFrom, setAirportDepartFrom] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAirportDepartFrom = async () => {
      if (query.length < 2) {
        setAirportDepartFrom([]);
        return;
      }

      setLoading(true);
      try {
        const body = { query };
        const response = await callSearchAirport(body);

        setAirportDepartFrom(response.data);
      } catch (error) {
        console.error("Error fetching AirportDepartFrom:", error);
      }
      setLoading(false);
    };

    const delayDebounceFn = setTimeout(() => {
      fetchAirportDepartFrom();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
  };

  return (
    <div className={styles.autocomplete}>
      <Input
        id="departure"
        placeholder="From"
        type="text"
        value={query}
        onChange={handleInputChange}
      />

      {loading && <div className={styles.loading}>Loading...</div>}
      <ul className={styles.suggestionsList}>
        {airportDepartFrom.map((suggestion, index) => (
          <li
            className={styles.suggestionItem}
            key={index}
            onClick={() => {
              handleSuggestionClick(suggestion.airport_name);
              setAirportDepartFrom([]);
              airport(suggestion);
            }}
            style={{ cursor: "pointer" }}
          >
            {suggestion.airport_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutocompleteDepartFrom;
