import { IoPerson, IoTrophySharp } from "react-icons/io5";
import { MdDownloadForOffline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import TopApps from "../components/TopApps.jsx";
import Footer from "../components/Footer.jsx";
import Marquee from "../components/Marquee.jsx";
import { useAppStore } from "../Store/AppStore.js";

function Games() {
  const navigate = useNavigate();
  const { games } = useAppStore();

  return (
    <div className=" overflow-y-scroll h-[90%]">
      <div className="banner w-full h-fit bg-blue-300">
        <img
          src="https://res.cloudinary.com/dhj9wvmmo/image/upload/v1717001013/Rummy-Logos/WhatsApp_Image_2024-05-29_at_7.59.56_PM_qrefkg.jpg"
          className="w-full"
          alt="banner"
        />
      </div>

      {/* top 3 */}
      <TopApps />

      <div className="px-3 mt-3">
        <h1 className=" w-full border border-black py-1 px-2 rounded-md bg-red-600 font-bold text-white text-center flex items-center justify-center gap-2 ">
          <IoTrophySharp />
          All Rummy Games
          <IoTrophySharp />
        </h1>
      </div>

      {/* list */}
      <div>
        {games.map((app, index) => {
          return (
            <div
              className="w-full h-20 border-b border-black my-2 flex justify-between items-center px-4"
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
                    <h1 className="font-bold">Bonus {app.bonus}</h1>
                  </div>
                  <h1 className=" text-green-700 text-[12px] font-bold">
                    Min Withrawal {app.minWithdrawal}
                  </h1>
                </div>
              </div>
              <a
                target="_blank"
                href={app.downloadLink}
                className="px-2 py-[3px] rounded download text-[13px] cursor-pointer  flex items-center justify-center gap-1"
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

export default Games;
