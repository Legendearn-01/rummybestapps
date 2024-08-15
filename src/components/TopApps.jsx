import { FaCheckCircle } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { useTopAppStore } from "../Store/AppStore.js";

const TopApps = () => {
  const { topApps } = useTopAppStore();

  return (
    <div className="w-full h-fit bg-white flex items-center justify-evenly">
      {topApps?.map((app, index) => {
        if (index == 1)
          return (
            <div
              key={index}
              className="h-fit w-fit bg-zinc-200 flex flex-col items-center p-3 rounded-md relative mb-8 pt-5"
            >
              <img
                className=" h-12 absolute top-[-20px]"
                src={app.ranking}
                alt=""
              />
              <div className="h-[70px] w-[70px] bg-red-400 rounded-md overflow-hidden">
                <img src={app.appLogo} alt="" />
              </div>
              <img
                className="w-[80px] my-1"
                src="https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716878038/Rummy-Logos/rummybonusapp_star_rating_sij4ii.gif"
                alt=""
              />
              <h1 className=" text-black text-[10px] flex items-center">
                <FaCheckCircle color="" />
                100% Safe & Secure
              </h1>
              <a
                target="_blank"
                href={app.downloadLink}
                className="px-2 py-[3px] rounded download text-[13px] cursor-pointer mt-2 flex items-center justify-center gap-1"
              >
                <div className=" animate-bounce">
                  <MdDownloadForOffline />
                </div>
                Download
              </a>
            </div>
          );

        return (
          <div
            key={index}
            className="h-fit w-fit bg-zinc-200 flex flex-col items-center p-3 rounded-md relative pt-5"
          >
            <img
              className=" h-12 absolute top-[-20px]"
              src={app.ranking}
              alt=""
            />
            <div className="h-16 w-16 bg-red-400 rounded-md overflow-hidden">
              <img src={app.appLogo} alt="" />
            </div>
            <img
              className="w-[70px] my-1"
              src="https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716878038/Rummy-Logos/rummybonusapp_star_rating_sij4ii.gif"
              alt=""
            />
            <h1 className=" text-black text-[9px] flex items-center">
              <FaCheckCircle color="" />
              100% Safe & Secure
            </h1>
            <a
              target="_blank"
              href={app.downloadLink}
              className="px-2 py-[3px] rounded download text-[10px] cursor-pointer mt-2 flex items-center justify-center gap-1"
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
  );
};

export default TopApps;
