import { useState } from "react";

function Joke(props) {
  const { type, setup, punchline, id } = props.joke;
  const [reveal, setReveal] = useState(false);

  function handleClick() {
    props.getNewJoke();
    setReveal(false);
  }

  return (
    <div className="h-full w-full flex flex-col justify-between items-center text-slate-800">
      {/* Minimalist Header */}
      <div className="text-center">
        <h1 className="text-2xl font-light tracking-tight bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">
          Laugh Out <strong>Loud</strong>
        </h1>
        <div className="h-1 w-8 bg-slate-400 mx-auto mt-2 rounded-full opacity-30" />
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-2">
        {type ? (
          <p className="text-lg leading-relaxed font-light text-slate-600">
            {setup}
          </p>
        ) : (
          <p className="text-slate-400 italic">Finding something funny...</p>
        )}

        <div className="mt-6 h-12 flex items-center">
          {reveal === false ? (
            <button
              onClick={() => setReveal(true)}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              [ Click to reveal ]
            </button>
          ) : (
            <p className="text-lg font-medium bg-gradient-to-br from-indigo-600 to-violet-500 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-2 duration-500">
              {punchline}
            </p>
          )}
        </div>
      </div>

      {/* Footer Button - Clean & Elegant */}
      <div className="w-full pt-4">
        <button
          onClick={handleClick}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-700 text-white text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.98]"
        >
          Next Joke
        </button>
        <p className="text-[10px] text-center mt-4 text-slate-400 uppercase tracking-widest">
          Ref ID: {id}
        </p>
      </div>
    </div>
  );
}

export default Joke;