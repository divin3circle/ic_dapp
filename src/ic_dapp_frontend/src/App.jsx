import { useEffect, useState } from "react";
import { ic_dapp_backend } from "declarations/ic_dapp_backend";
import { initJuno } from "@junobuild/core";

function App() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const initApp = async () => {
      await initJuno({
        satelliteId: "qin74-eqaaa-aaaal-ai54q-cai",
      });
    };
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    ic_dapp_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main className="bg-gray-800">
      <img src="/logo2.svg" alt="DFINITY Logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App;
