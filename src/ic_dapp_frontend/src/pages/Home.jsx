import React, { useEffect, useState } from "react";
import Navbar from "../components/home/Navbar";
import { useNavigate } from "react-router-dom";
import { authSubscribe } from "@junobuild/core";
import ManagerBanner from "../components/home/ManagerBanner";
import Fixtures from "../components/home/Fixtures";

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const authenticate = async () => {
      authSubscribe((user) => {
        const currentUser = user;
        setUser(currentUser);
      });
    };
    authenticate();
  }, []);
  if (!user) {
    navigate("/");
    return;
  }
  return (
    <div>
      <Navbar />
      <div className=" max-w-[900px] mx-auto my-0">
        <ManagerBanner />
        <Fixtures />
      </div>
    </div>
  );
}

export default Home;
