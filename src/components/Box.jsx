"use client";
import { useEffect, useState } from "react";
import Joke from "./Joke";

function Box() {
  const [joke, setJoke] = useState({});
  const [newJoke, setNewJoke] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
      );
      const res = await data.json();
      setJoke(res);
    };
    getData();
  }, [newJoke]);

  function getNewJoke() {
    setNewJoke((prev) => !prev);
  }

  return (
    <div className="relative flex justify-center items-center h-screen w-full overflow-hidden bg-[#f8fafc]">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-40" 
          style={{
            background: `
              radial-gradient(at 0% 0%, #5174e6 0px, transparent 50%),
              radial-gradient(at 100% 0%, #195ea3 0px, transparent 50%),
              radial-gradient(at 100% 100%, #0d1f4d 0px, transparent 50%),
              radial-gradient(at 0% 100%, #0c143b 0px, transparent 50%)
            `
          }}
        />
      </div>

      {/* The Joke Card */}
      <div className="relative z-10 w-[90%] max-w-[400px] bg-white border border-slate-200/60 p-10 rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)]">
        <Joke joke={joke} getNewJoke={getNewJoke} />
      </div>
    </div>
  );
}

export default Box;