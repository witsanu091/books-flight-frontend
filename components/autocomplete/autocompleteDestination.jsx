"use client";

import { useState, useEffect } from "react";
import { callSearchAirport } from "@/lib/call-api/callSearchAirport";
import { Input } from "../ui/input";
import styles from "./AutocompleteSearch.module.css"; // Assuming you're using CSS Modules

const AutocompleteDestination = ({ airport }) => {
  const [query, setQuery] = useState("");
  const [airportDestination, setAirportDestination] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAirportDestination = async () => {
      if (query.length < 2) {
        setAirportDestination([]);
        return;
      }

      setLoading(true);
      try {
        const body = { query };
        const response = await callSearchAirport(body);

        setAirportDestination(response.data);
      } catch (error) {
        console.error("Error fetching AirportDestination:", error);
      }
      setLoading(false);
    };

    const delayDebounceFn = setTimeout(() => {
      fetchAirportDestination();
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
        placeholder="To"
        type="text"
        value={query}
        onChange={handleInputChange}
      />

      {loading && <div className={styles.loading}>Loading...</div>}
      <ul className={styles.suggestionsList}>
        {airportDestination.map((suggestion, index) => (
          <li
            className={styles.suggestionItem}
            key={index}
            onClick={() => {
              handleSuggestionClick(suggestion.airport_name);
              setAirportDestination([]);
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

export default AutocompleteDestination;
