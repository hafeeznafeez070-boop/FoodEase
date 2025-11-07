import { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGen = () => {};
  return (
    <div>
      <h1 className="text-4xl text-center pt-5 text-white">
        Password Generator
      </h1>
    </div>
  );
}

// git config --global user.name "hafeeznafeez070-boop"
// git config --global user.email "hafeeznafeez070@gmail.com"
