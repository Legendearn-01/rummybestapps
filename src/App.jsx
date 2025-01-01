import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Routing from "./utils/Routing";
import { useAppStore } from "./Store/AppStore";
import axios from "axios";

function App() {
  const [show, setShow] = useState(0);
  const [count, setCount] = useState(() => {
    if (localStorage.getItem("apps")) return false;
    else return true;
  });
  const [isLoading, setIsLoading] = useState(0);
  const { setAllApps } = useAppStore();

  const getApps = async () => {
    await axios
      .get("https://rummy-server.vercel.app/get/getApps")
      .then((res) => {
        localStorage.setItem("apps", JSON.stringify(res.data));
        setAllApps(res.data);
        console.log(JSON.stringify(res.data));
        setCount(false);
        setIsLoading((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });

    await axios
      .post("https://rummy-server.vercel.app/stats/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const apps = localStorage.getItem("apps");
    if (apps) setAllApps(JSON.parse(apps));
    getApps();
  }, []);

  return (
    <div className="bg-white h-screen w-full mx-auto relative">
      {/* Header */}

      {count && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-white z-20"></div>
      )}

      <a
        className=" fixed right-0 top-[50%] z-10"
        href="https://t.me/AllTypeLoots"
        target="_blank"
      >
        <img
          className="h-10"
          src="https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716309568/telegram-rummybonusapp_dpm5vy.png"
          alt="telegram"
        />
      </a>

      <div className="header h-[9%]">
        <div className="bg-[#003A92] text-white h-[60%] flex justify-between items-center px-3 relative">
          <div className="text-md font-bold h-full flex items-center gap-2">
            <img
              className=" h-[80%] rounded-md"
              src="https://res.cloudinary.com/dhj9wvmmo/image/upload/v1717579685/Rummy-Logos/Screenshot_20240605-145606_Drive_dkerhq.jpg"
              alt="logo"
            />
            <h1>RummyBestApps</h1>
          </div>
          <div className="flex items-center gap-2">
            <a className="" href="https://t.me/AllTypeLoots" target="_blank">
              <img
                className="h-7"
                src="https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716309568/telegram-rummybonusapp_dpm5vy.png"
                alt="telegram"
              />
            </a>
            <button
              onClick={() => setShow((prev) => !prev)}
              className="text-xl font-bold flex items-center gap-1"
            >
              <IoMenu />
              <h1 className="text-xs">MENU</h1>
            </button>
          </div>
          {show ? (
            <div className="w-full h-fit absolute top-[100%] left-0 z-20 bg-[#003A92]">
              <NavLink
                onClick={() => setShow(0)}
                className="hover:bg-zinc-700 hover:text-white py-1 w-full flex items-center justify-center"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setShow(0)}
                className="hover:bg-zinc-700 hover:text-white py-1 w-full flex items-center justify-center"
                to="/games"
              >
                Games
              </NavLink>
              <NavLink
                onClick={() => setShow(0)}
                className="hover:bg-zinc-700 hover:text-white py-1 w-full flex items-center justify-center"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                onClick={() => setShow(0)}
                className="hover:bg-zinc-700 hover:text-white py-1 w-full flex items-center justify-center"
                to="/privacy"
              >
                Privacy
              </NavLink>
              <NavLink
                onClick={() => setShow(0)}
                className="hover:bg-zinc-700 hover:text-white py-1 w-full flex items-center justify-center"
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                onClick={() => setShow(0)}
                className="hover:bg-zinc-700 hover:text-white py-1 w-full flex items-center justify-center"
                to="/tac"
              >
                Terms And Condition
              </NavLink>
            </div>
          ) : null}
        </div>

        <nav className="bg-white h-[40%] font-bold flex justify-between items-center">
          <NavLink
            className="hover:bg-zinc-700 hover:text-white h-full w-full flex items-center justify-center"
            to="/"
          >
            Home
          </NavLink>
          <div className="h-[70%] w-[4px] bg-black"></div>
          <NavLink
            className="hover:bg-zinc-700 hover:text-white h-full w-full flex items-center justify-center"
            to="/games"
          >
            Games
          </NavLink>
          <div className="h-[70%] w-[4px] bg-black"></div>
          <NavLink
            className="hover:bg-zinc-700 hover:text-white h-full w-full flex items-center justify-center"
            to="/about"
          >
            About
          </NavLink>
          <div className="h-[70%] w-[4px] bg-black"></div>
          <NavLink
            className="hover:bg-zinc-700 hover:text-white h-full w-full flex items-center justify-center"
            to="/privacy"
          >
            Privacy
          </NavLink>
          <div className="h-[70%] w-[4px] bg-black"></div>
          <NavLink
            className="hover:bg-zinc-700 hover:text-white h-full w-full flex items-center justify-center"
            to="/contact"
          >
            Contact
          </NavLink>
          <div className="h-[70%] w-[4px] bg-black"></div>
          <NavLink
            className="hover:bg-zinc-700 hover:text-white h-full w-full flex items-center justify-center"
            to="/blogs"
          >
            Blogs
          </NavLink>
        </nav>
      </div>

      <Routing />
    </div>
  );
}

export default App;
