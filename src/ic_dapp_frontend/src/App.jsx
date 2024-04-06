import { useEffect, useState } from "react";
import { ic_dapp_backend } from "declarations/ic_dapp_backend";
import { initJuno } from "@junobuild/core";
import LandingPage from "./pages/LandingPage";

function App() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const initApp = async () => {
      await initJuno({
        satelliteId: "qin74-eqaaa-aaaal-ai54q-cai",
      });
    };
    initApp();
  }, []);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   ic_dapp_backend.greet(name).then((greeting) => {
  //     setGreeting(greeting);
  //   });
  //   return false;
  // }

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
