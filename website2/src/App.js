import { useState } from "react";

function MyBtn() {
  const [count, setCount] =useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>{count}</button>
  );
}

function ExtraPage() {
  return (
    <>
        <h1>Extra</h1>
        <p>This is something...<br />extra?</p>
        <MyBtn />
    </>
  );
}

export default function MyApp() {
  return (
  <div>
    <h1>Welcome</h1>
    <MyBtn />
    <ExtraPage />
  </div>
  );
}