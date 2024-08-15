import { BsInstagram } from "react-icons/bs";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdCall, MdPrivacyTip } from "react-icons/md";


const Footer = () => {
  return (
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
  );
};

export default Footer;
