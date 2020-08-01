import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import useFetch from "./effects/useFetch";
import CharactersGrid from "./components/CharactersGrid";
import SearchBox from "./components/SearchBox";

const App = () => {
    const [searchQuery,setQuery]= useState("");
    const { cast, isLoading } = useFetch(`https://www.breakingbadapi.com/api/characters?name=${searchQuery}`);
    return (
        <div className="container">
            <Header />
            <SearchBox handleSubmit={(query)=>setQuery(query)} />
            <CharactersGrid isLoading={isLoading} cast={cast} />
        </div>
    );
};

export default App;
