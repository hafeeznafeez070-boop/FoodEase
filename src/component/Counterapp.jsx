import { useState } from "react";

export default function CounterApp({ title = "Counter" }) {
  const [counter, setCounter] = useState(10);
  const [message, setMessage] = useState("");

  const AddOne = () => {
    setCounter(counter + 1);
    const addMsg = "One Added";
    setMessage(addMsg);
  };
  const RemoveOne = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      const removeMsg = "One Removed";
      setMessage(removeMsg);
    } else {
      const zeroMsg = "You cannot remove from Zero";
      setMessage(zeroMsg);
    }
  };
  let [background, setBackground] = useState("");

  const changeBg1 = () => {
    let bgColor = "bg-red-600";
    setBackground(bgColor);
  };
  const changeBg2 = () => {
    let bgColor = "bg-green-600";
    setBackground(bgColor);
  };
  return (
    <>
      <div className={background}>
        <h1>This is {title} App</h1>
        <h3>{counter}</h3>
        <button onClick={AddOne}>Add</button>
        <br />
        <button onClick={RemoveOne}>Remove</button>
        <h4>{message}</h4>
        <button onClick={changeBg1}>Bg-Red</button>
        <br />
        <button onClick={changeBg2}>Bg-Green</button>
        <br />
        <button onClick={() => setBackground("")}>Nomal Bg</button>
      </div>
    </>
  );
}
