import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { authSubscribe, signIn } from "@junobuild/core";
import Loading from "../components/loading/LoadingPage";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [user, setUser] = useState(null);
  if (user) {
    navigate("/app");
  }
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //   useEffect(() => {
  //     authSubscribe((user) => {
  //       console.log("User:", user);
  //     });
  //   }, []);

  const handleSignIn = async () => {
    setLoading(true);
    await signIn();
    authSubscribe((user) => {
      const currentUser = user;
      setUser(currentUser);
      localStorage.setItem("currentUser", user?.key);
    });
    setLoading(false);
    navigate("/app");
  };

  if (loading) return <Loading />;
  return (
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-30 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Welcome to IC Fantasy
              <strong className="font-extrabold text-red-700 sm:block">
                {" "}
                Fantasy On-Chain{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              IC Fantasy is a decentralized platform for creating and managing
              fantasy sports leagues on the Internet Computer.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div
                onClick={handleSignIn}
                className="flex items-center justify-center cursor-pointer no-underline font-bold w-full rounded bg-red-600 px-12 py-3 text-sm text-white shadow hover:bg-transparent hover:text-red-600 ease-in duration-150 hover:scale-110 sm:w-auto"
              >
                Get Started
              </div>

              <a
                className="flex font-bold justify-between items-center gap-5 w-full no-underline rounded px-12 py-3 text-sm text-red-600 shadow hover:text-white ease-in duration-150 hover:bg-red-600 hover:scale-95 sm:w-auto"
                href="#"
              >
                <FaGithub size={24} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
