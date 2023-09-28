import React, { useEffect, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function AutoCompleteCategory() {
  const [filteredCountries, setFilteredCountries] = useState([
    { name: "Action" },
    { name: "Action" },
    { name: "Animation" },
    { name: "Comedy" },
    { name: "Crime" },
    { name: "Drama" },
    { name: "Family" },
    { name: "Fantasy" },
    { name: "Sports" },
    { name: "War" },
  ]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  //   const [filteredCountries, setFilteredCountries] = useState(null);

  const search = (event) => {
    // Timeout to emulate a network connection
    setTimeout(() => {
      let _filteredCountries;

      if (!event.query.trim().length) {
        _filteredCountries = [...countries];
      } else {
        _filteredCountries = countries.filter((country) => {
          return country.name
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }

      setFilteredCountries(_filteredCountries);
    }, 250);
  };

  //   useEffect(() => {
  //     CountryService.getCountries().then((data) => setCountries(data));
  //   }, []);

  return (
    <div className="card flex justify-content-center">
      <AutoComplete
        field="name"
        value={selectedCountry}
        suggestions={filteredCountries}
        completeMethod={search}
        onChange={(e) => setSelectedCountry(e.value)}
      />
    </div>
  );
}
