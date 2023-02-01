import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import { getData } from "./service/getData";
import { Tour } from "./types";

function App() {
  const [tours, setTours] = useState<Tour[]>([]);
  useEffect(() => {
    getData().then((data) => setTours(data));
  }, []);
  const handleClick = (id: string) => {
    const filteredList = tours.filter((tour) => tour.id !== id);
    setTours(filteredList);
  };

  return (
    <div className="container">
      <h1 className="container-title">Our Tours</h1>
      <main>
        {tours.map((tour) => (
          <Card key={tour.id} handleClick={handleClick} tour={tour} />
        ))}
      </main>
    </div>
  );
}

export default App;
