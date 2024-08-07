import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaCheckCircle, FaTelegram, FaYoutube } from "react-icons/fa";
import { IoPerson, IoTrophySharp } from "react-icons/io5";
import { MdCall, MdDownloadForOffline, MdPrivacyTip } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Games() {
  const navigate = useNavigate();
  const games = [
    {
      name: "Spin 101",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹30-₹100",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1720283204/Rummy-Logos/WhatsApp_Image_2024-07-06_at_15.52.25_2c41065f_nwlfew.jpg",
      downloadLink:
        "https://www.spin101agent.com?code=P4CGPUB9C1X&t=1719288040",
    },
    {
      name: "MBM Bet",
      type: "Rummy",
      downloads: "200k+",
      bonus: "Upto ₹100",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776157/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.37_AM_f78xug.jpg",
      downloadLink: "https://www.mbmagent.com/?code=UPHRWC7UUX5&t=1716300919",
    },
    {
      name: "Yono Game",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹30-₹100",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.38_AM_1_kc45bm.jpg",
      downloadLink: "https://yonofreecash.com?code=7NYS7DVE&t=1720671810",
    },
    {
      name: "My 777",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹20-₹50",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1720283204/Rummy-Logos/WhatsApp_Image_2024-07-06_at_15.52.25_81134088_y0gqwl.jpg",
      downloadLink: "https://www.my777.app?code=WF1MND819WB&t=1719458392",
    },
    {
      name: "MQM Bet 1",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹15",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1720283204/Rummy-Logos/WhatsApp_Image_2024-07-06_at_15.52.25_bb639a69_ea27fh.jpg",
      downloadLink: "https://share.mqmbet1.com?pid=299766900",
    },
    {
      name: "IND Slots Agent",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹15-₹100",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1720283204/Rummy-Logos/WhatsApp_Image_2024-07-06_at_15.52.24_1501839f_xhwoxf.jpg",
      downloadLink:
        "https://www.indslotsagent.com?code=KLLHZ9CTZ4X&t=1719298220",
    },
    {
      name: "Rummy East",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776157/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.36_AM_lmvele.jpg",
      downloadLink:
        "https://rummy888999.com//?from_gameid=14144156&channelCode=2799582",
    },
    {
      name: "Rummy Perfect",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹44",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776157/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.36_AM_1_vpeqw4.jpg",
      downloadLink: "https://rummy58.com/?code=11773877",
    },
    {
      name: "567 Slots",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹20-₹70",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776157/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.37_AM_1_tz4d3o.jpg",
      downloadLink:
        "https://www.567slotsagent.com/?code=9UXH9L91P9R&t=1716301037",
    },
    {
      name: "Yono 777",
      type: "Rummy",
      downloads: "200k+",
      bonus: "Upto ₹50",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776157/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.38_AM_q4ivz0.jpg",
      downloadLink: "https://yono777.win?code=F9M6JKBYK2L&t=1723005649",
    },
    {
      name: "Yono Rummy",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹20-₹50",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.38_AM_1_kc45bm.jpg",
      downloadLink:
        "https://download.yonoapk.com/?code=VIPLW81T4US&t=1716301189",
    },
    {
      name: "Yono Arcade",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹30-₹80",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.38_AM_2_dt1uky.jpg",
      downloadLink:
        "https://www.yonoarcadeapp.com/?code=F553L692FWZ&t=1716301474",
    },
    {
      name: "789 Jackpots",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹20-₹80",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.39_AM_rmfcjz.jpg",
      downloadLink:
        "https://789jackpotsagent.com/?code=J7ZC4RMSKGN&t=1716301586",
    },
    {
      name: "Bingo 101",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹25-₹50",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776155/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.39_AM_1_dcr2tp.jpg",
      downloadLink:
        "https://www.bingo101official.com/?code=3WF2M8RR9VG&t=1716301652",
    },
    {
      name: "ICIC Games",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹20-₹100",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776155/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.39_AM_2_ibtbpl.jpg",
      downloadLink:
        "https://www.icicgamesagent.com/?code=8FW2DDQPH79&t=1716301712",
    },
    {
      name: "MDM Bet",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹20-₹80",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776157/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.40_AM_q68p82.jpg",
      downloadLink: "https://www.mdmbet.app/?code=0G7R21W8A2X&t=1716301774",
    },
    {
      name: "MKM Bet",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹30-₹100",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.40_AM_1_o7kies.jpg",
      downloadLink: "https://www.mkmbet.app/?code=MJ0334CN93F&t=1716301833",
    },
    {
      name: "Spin Crush",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹10-₹25",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.41_AM_bzdri4.jpg",
      downloadLink:
        "https://www.spincrushagent.com/?code=ADE41ZABJNB&t=1716301935",
    },
    {
      name: "Spin Lucky",
      type: "Rummy",
      downloads: "200k+",
      bonus: " ₹8-₹25",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.41_AM_1_ywllsc.jpg",
      downloadLink: "https://www.spinluckys.com/?code=FQ0M4L81HQH&t=1716302001",
    },
    {
      name: "Spin 777",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹20-₹100",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.41_AM_2_glxyni.jpg",
      downloadLink: "https://www.spin777a.in/?code=7V9K5D7765G&t=1716302085",
    },
    {
      name: "Yes 3 Patti",
      type: "Rummy",
      downloads: "200k+",
      bonus: "Upto ₹500",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776155/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.42_AM_geqpgz.jpg",
      downloadLink:
        "http://yes3pattidl.com/?from_gameid=11209288&channelCode=200000",
    },
    {
      name: "Rio 3 Patti",
      type: "Rummy",
      downloads: "200k+",
      bonus: "Upto ₹500",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776155/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.42_AM_1_hxdq7q.jpg",
      downloadLink:
        "http://rio3pattidl.com/?from_gameid=7726381&channelCode=100000",
    },
    {
      name: "SVIP 3 Patti",
      type: "Rummy",
      downloads: "200k+",
      bonus: "Upto ₹500",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776155/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.43_AM_mcdd4f.jpg",
      downloadLink:
        "https://svip3pattiag.com/?from_gameid=4729992&channelCode=100000",
    },
    {
      name: "Rummy Golds",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776155/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.43_AM_1_uy5dwp.jpg",
      downloadLink:
        "https://rummygolds.com/?from_gameid=1242136&channelCode=1241993",
    },
    {
      name: "Bet 213",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹20-₹80",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1718973476/Rummy-Logos/WhatsApp_Image_2024-06-21_at_6.05.26_PM_fddro8.jpg",
      downloadLink: "https://www.bet213app.com/?code=2QTDU4YL4GS&t=1717561586",
    },
    {
      name: "LCG Bet",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹50-₹500",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1719039475/Rummy-Logos/uirchz3sgsv7ddjo58wy.jpg",
      downloadLink:
        "https://wingobonus.com/#/pages/bonus/bn?invite_code=94375128",
    },
    {
      name: "IND Bingo",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹25-₹75",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1718973476/Rummy-Logos/WhatsApp_Image_2024-06-21_at_6.05.25_PM_sv73nx.jpg",
      downloadLink: "https://www.indbingo1.com/?code=R9AVHCV4WDZ&t=1718694200",
    },
  ];

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
      <div className="w-full h-fit bg-white flex items-center justify-evenly">
        <div className="h-fit w-fit bg-zinc-200 flex flex-col items-center p-3 rounded-md relative pt-5">
          <img
            className=" h-12 absolute top-[-20px]"
            src="https://rummybonusapp.com/kr/assets/20230731_153804.webp"
            alt=""
          />
          <div className="h-16 w-16 bg-red-400 rounded-md overflow-hidden">
            <img src={games[1].appLogo} alt="" />
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
            href={games[1].downloadLink}
            className="px-2 py-[3px] rounded download text-[10px] cursor-pointer mt-2 flex items-center justify-center gap-1"
          >
            <div className=" animate-bounce">
              <MdDownloadForOffline />
            </div>
            Download
          </a>
        </div>
        <div className="h-fit w-fit bg-zinc-200 flex flex-col items-center p-3 rounded-md relative mb-8 pt-5">
          <img
            className=" h-12 absolute top-[-20px]"
            src="https://rummybonusapp.com/kr/assets/20230731_153953.webp"
            alt=""
          />
          <div className="h-[70px] w-[70px] bg-red-400 rounded-md overflow-hidden">
            <img src={games[0].appLogo} alt="" />
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
            href={games[0].downloadLink}
            className="px-2 py-[3px] rounded download text-[13px] cursor-pointer mt-2 flex items-center justify-center gap-1"
          >
            <div className=" animate-bounce">
              <MdDownloadForOffline />
            </div>
            Download
          </a>
        </div>
        <div className="h-fit w-fit bg-zinc-200 flex flex-col items-center p-3 rounded-md relative pt-5">
          <img
            className=" h-12 absolute top-[-20px]"
            src="https://rummybonusapp.com/kr/assets/20230731_154129.webp"
            alt=""
          />
          <div className="h-16 w-16 bg-red-400 rounded-md overflow-hidden">
            <img src={games[2].appLogo} alt="" />
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
            href={games[2].downloadLink}
            className="px-2 py-[3px] rounded download text-[10px] cursor-pointer mt-2  flex items-center justify-center gap-1"
          >
            <div className=" animate-bounce">
              <MdDownloadForOffline />
            </div>
            Download
          </a>
        </div>
      </div>

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

      <div className="bg-yellow-400 border-y-2 my-3 border-dashed border-red-500 px-2 marquee">
        <marquee behavior="" direction="">
          <h1 className="font-bold text-sm">
            <span className="text-blue-700">Queries :-</span> all rummy app, all
            rummy app 2023, all rummy app 2024, all rummy game 2024, all rummy
            game 500 bonus, all rummy games 2024, all rummy games 500 bonus, all
            rummy games online, aol rummy, best rummy app, bonus game, go rummy,
            new rummy app 500 bonus, new rummy apps 2023, royally rummy, rummy,
            rummy all apk 500 bonus, rummy all app 2023, rummy all app 2024,
            rummy all app new 2024, rummy all games 2023, rummy all games 2024,
            rummy application, rummy download, rummy free download, rummy game,
            rummy glee, rummy gold, rummy modern, rummy new app 2024 download,
            rummy new app 51 bonus 2024, rummy wealth, teen patti gold 51 bonus,
            window gold
          </h1>
        </marquee>
      </div>

      {/* footer */}
      <div className="bg-blue-600 w-full p-3 flex justify-center flex-col gap-3">
        <div className="flex flex-wrap justify-center gap-2">
          <a
            href="https://www.instagram.com/earningplatform01?igsh=b25hanl0NGVma3du"
            target="_blank"
            className="p-2  rounded text-[13px] cursor-pointer flex items-center justify-center gap-1 w-fit text-white bg-pink-600"
          >
            <BsInstagram />
          </a>
          <a
            href="https://t.me/AllTypeLoots"
            target="_blank"
            className="px-2 py-[3px] rounded text-[13px] cursor-pointer flex items-center justify-center gap-1 w-fit bg-[#319edd] text-white"
          >
            <FaTelegram /> Join
          </a>
          <a
            href="https://youtube.com/@alltypeloot?si=lOVPslnxQwjoasPN"
            target="_blank"
            className="px-2 py-[3px] rounded text-[13px] cursor-pointer flex items-center justify-center gap-1 w-fit bg-[#ec3636] text-white"
          >
            <FaYoutube />
          </a>
        </div>
        <hr />
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => navigate("/about")}
            className="px-2 py-[3px] rounded text-[13px] cursor-pointer flex items-center justify-center gap-1 w-fit border text-white border-white"
          >
            <IoPerson />
            About Us
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="px-2 py-[3px] rounded text-[13px] cursor-pointer flex items-center justify-center gap-1 w-fit border text-white border-white"
          >
            <MdCall />
            Contact Us
          </button>
          <button
            onClick={() => navigate("/privacy")}
            className="px-2 py-[3px] rounded text-[13px] cursor-pointer flex items-center justify-center gap-1 w-fit border text-white border-white"
          >
            <MdPrivacyTip />
            Privacy Policy
          </button>
          <button
            onClick={() => navigate("/tac")}
            className="px-2 py-[3px] rounded text-[13px] cursor-pointer flex items-center justify-center gap-1 w-fit border text-white border-white"
          >
            <MdPrivacyTip />
            Terms And Condition
          </button>
        </div>
        <hr />
        <h1 className="text-white text-xs text-center">
          Copyright ©️ Rummybestapps.com All Rights Reserved
        </h1>
        <hr />
      </div>
    </div>
  );
}

export default Games;
