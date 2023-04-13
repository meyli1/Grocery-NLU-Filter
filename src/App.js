import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

const groceryCodes = {
  "Acorn Squash": 38,
  "L Avocados": 2,
  "XL Avocados": 45,
  Bananas: 4,
  "Butternut Squash": 39,
  Cantaloupe: 5,
  Cauliflower: 14,
  "Cherries Rainer": 35,
  "Cherries Red": 34,
  "Cat Food": 94,
  "Dog Food": 93,
  "Cotton Candy Grapes": 37,
  "Cucumber Seedless": 44,
  Cucumbers: 6,
  "Flavored Water 24": 95,
  "Grapes Green": 8,
  "Grapes Red": 1,
  "Iceberg Lettuce": 12,
  Cabbage: 3,
  Mangoes: 9,
  "NSP Water Pack": 98,
  Papaya: 22,
  Peaches: 18,
  Pineapple: 43,
  Pomegranantes: 17,
  Pumpkins: 36,
  "Purified Drinking Water": 99,
  "Purified Water": 97,
  "Salt Pellets": 92,
  "Spaghetti Squash": 40,
  Tomatoes: 10,
  "Watermelon Seedless": 15,
};

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <label>Name</label>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {Object.keys(groceryCodes)
          .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <p key={item} value={groceryCodes[item]}>
              {item} - {groceryCodes[item]}
            </p>
          ))}
      </div>
    </div>
  );
}

export default App;
