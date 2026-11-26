import { useState, useEffect } from "react";
import axios from "axios";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
    setSelectedCountry(null);
  };

  const filteredCountries = query.trim()
    ? countries.filter((c) =>
        c.name.common.toLowerCase().includes(query.trim().toLowerCase()),
      )
    : [];

  return (
    <div>
      <div>
        find countries <input value={query} onChange={handleQueryChange} />
      </div>

      {selectedCountry ? (
        <CountryDetail country={selectedCountry} />
      ) : (
        query.trim() && (
          <CountryList
            countries={filteredCountries}
            onSelectCountry={setSelectedCountry}
          />
        )
      )}
    </div>
  );
};

export default App;
