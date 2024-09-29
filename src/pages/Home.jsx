import React, { useEffect, useState } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaQrcode } from "react-icons/fa";
import { IoGift } from "react-icons/io5";
import { MdDownloadForOffline } from "react-icons/md";
import TopApps from "../components/TopApps.jsx";
import Footer from "../components/Footer.jsx";
import Marquee from "../components/Marquee.jsx";
import { useAppStore } from "../Store/AppStore.js";
import axios from "axios";

function Home() {
  const { bestForAllGames, newApps, teenPatti } = useAppStore();

  const games = [bestForAllGames, newApps, teenPatti];
  const [selected, setSelected] = useState(0);
  const [searched, setSearched] = useState("");
  const [apps, setApps] = useState(games[selected]);
  const [opacity, setOpacity] = useState("opacity-100");

  useEffect(() => {
    setApps(() => {
      let filtered = games[selected].filter((app) => {
        if (app.name.toLowerCase().includes(searched.toLowerCase())) return app;
      });
      return filtered;
    });
  }, [bestForAllGames, newApps, teenPatti, selected, searched]);

  useEffect(() => {
    setTimeout(() => {
      setOpacity("opacity-100");
    }, 500);
  }, [apps]);

  const handleDownload = async () => {
    await axios
      .post("https://rummy-server.vercel.app/stats/downloads")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" overflow-y-scroll h-[90%]">
      <div className="banner w-full h-fit bg-blue-300">
        <img
          src="https://res.cloudinary.com/dhj9wvmmo/image/upload/v1717001013/Rummy-Logos/WhatsApp_Image_2024-05-29_at_7.59.56_PM_qrefkg.jpg"
          className="w-full"
          alt="banner"
        />
      </div>

      <TopApps />

      {/* Searching */}
      <div className="px-3 mt-3">
        <input
          type="text"
          value={searched}
          onChange={(e) => {
            setSearched(e.target.value);
          }}
          placeholder="search apps"
          className=" w-full border border-black py-1 px-2 rounded-md bg-sky-300 bg-opacity-40"
        />
      </div>

      {/* Buttons */}
      <div className="h-8 flex mt-3 px-1 gap-1 text-xs">
        <button
          onClick={() => {
            setOpacity("opacity-0");
            setSelected(0);
            setSearched("");
          }}
          className={`w-full h-full rounded-md flex justify-center items-center gap-1 border border-zinc-400 ${
            selected == 0 ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          <BsGraphUpArrow />
          Best Apps
        </button>
        <button
          onClick={() => {
            setOpacity("opacity-0");
            setSelected(1);
            setSearched("");
          }}
          className={`w-full h-full rounded-md flex justify-center items-center gap-1 border border-zinc-400 ${
            selected == 1 ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          <IoGift />
          New Apps
        </button>
        <button
          onClick={() => {
            setOpacity("opacity-0");
            setSelected(2);
            setSearched("");
          }}
          className={`w-full h-full rounded-md flex justify-center items-center gap-1 border border-zinc-400 ${
            selected == 2 ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          <FaQrcode />
          Teenpatti Apps
        </button>
      </div>

      {/* list */}
      <div className="">
        {apps?.map((app, index) => {
          return (
            <div
              className={`w-full h-20 border-b border-black my-2 flex justify-between items-center px-4 ${opacity} transition-all ease-out`}
              key={index}
            >
              <div className="flex gap-3 items-center">
                <div className="h-12 w-12 bg-red-400 rounded-md overflow-hidden">
                  {app.appLogo ? (
                    <img src={app.appLogo} className="w-full" alt="app logo" />
                  ) : null}
                </div>
                <div className="">
                  <h1 className="text-[14px] font-bold">{app.name}</h1>
                  <div className="flex items-center gap-1 text-[10px] ">
                    <h1 className="text-blue-600">D: {app.downloads}</h1>
                    <div className="h-3 w-[1px] bg-zinc-500"></div>
                    <h1 className=" font-bold">Bonus {app.bonus}</h1>
                  </div>
                  <h1 className=" text-green-700 text-[12px] font-bold">
                    Min Withrawal {app.minWithdrawal}
                  </h1>
                </div>
              </div>
              <a
                onClick={handleDownload}
                target="_blank"
                href={app.downloadLink}
                className="px-2 py-[3px] rounded download text-[13px] cursor-pointer flex items-center justify-center gap-1"
              >
                <div className=" animate-bounce">
                  <MdDownloadForOffline />
                </div>
                Download
              </a>
            </div>
          );
        })}
      </div>

      <Marquee />

      <Footer />
    </div>
  );
}

export default Home;
