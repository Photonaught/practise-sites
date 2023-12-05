function MyBtn() {
  return (
    <button>Button</button>
  );
}

function AboutPge() {
  return (
    <>
        <h1>About</h1>
        <p>This is the<br />about page.</p>
    </>
  );
}

export default function MyApp() {
  return (
  <div>
    <h1>Welcome</h1>
    <MyBtn />
    <AboutPge />
  </div>
  );
}
