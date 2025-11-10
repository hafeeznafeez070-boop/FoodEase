import { useState, useEffect, useCallback, useRef } from "react";

export default function PasswordGen() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRang(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);
  return (
    <div>
      <h1 className="text-white text-3xl text-center pt-8">
        Password Generator
      </h1>
      <div className="ml-5">
        <input
          className="bg-white text-center"
          type="text"
          value={password}
          ref={passwordRef}
          placeholder="Password"
          readOnly
        />
        <button
          onClick={copyPasswordToClipBoard}
          className="ml-2 bg-blue-600 text-white"
        >
          Copy
        </button>
      </div>
      <div className="text-white mt-5 ml-7">
        <input
          className=""
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        ></input>
        <label className="ml-2  mb-5 text-center">length: {length}</label>
      </div>
      <div className="text-white mt-5 ml-7">
        <input
          className=""
          type="checkbox"
          id="numberInput"
          defaultChecked={numberAllowed}
          onChange={(e) => {
            setNumberAllowed((prev) => !prev);
          }}
        ></input>
        <label className="ml-2" htmlFor="numberInput">
          Numbers
        </label>
      </div>
      <div className="text-white mt-5 ml-7">
        <input
          className=""
          type="checkbox"
          id="characterInput"
          defaultChecked={charAllowed}
          onChange={(e) => {
            setNumberAllowed((prev) => !prev);
          }}
        ></input>
        <label className="ml-2" htmlFor="characterInput">
          Characters
        </label>
      </div>
    </div>
  );
}
