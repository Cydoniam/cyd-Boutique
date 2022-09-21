function App() {
  const test = "boutique"
  let name = () => "Timmy"
  const el1 = <h1>Hello, {test}</h1>
  const el2 = <h1>Hello, {name()}</h1>

  return (
        <div className="App">
      <header className="App-header">
        <p>
          Hello world!
          {el1}
          {el2}
        </p>
      </header>
    </div>
  );
}

export default App;