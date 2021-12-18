import React, { useState, useEffect } from "react";
import Showinfo from "./Showinfo";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";
export default function App() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const removeInfo = (id) => {
    const newInfo = info.filter((tour) => tour.id !== id);
    setInfo(newInfo);
  };
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setInfo(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (info.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Showinfo info={info} removeInfo={removeInfo} />
    </main>
  );
}
