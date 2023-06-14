import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        var url1 = "https://gateway.marvel.com/v1/public/characters?";
        var url2 =
          "ts=1&apikey=3f6d917dfd12a90af272405d99f61f91&hash=1d9d8f4d4240e1c81d3e082009277d78";
        if (query !== "") {
          url1 = url1.concat(`nameStartsWith=${query}&&`);
        }
        var url = url1 + url2;
        console.log(url);
        const res = await axios.get(url);
        setItems(res.data.data.results);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
      <Footer />
    </div>
  );
};

export default App;
