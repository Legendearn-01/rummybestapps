import { create } from "zustand";

export const useTopAppStore = create((set) => ({
  topApps: [
    {
      name: "MBM Bet",
      ranking: "https://rummybonusapp.com/kr/assets/20230731_153804.webp",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776157/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.37_AM_f78xug.jpg",
      downloadLink: "https://www.mbmagent.com/?code=UPHRWC7UUX5&t=1716300919",
    },
    {
      name: "Spin 101",
      ranking: "https://rummybonusapp.com/kr/assets/20230731_153953.webp",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1720283204/Rummy-Logos/WhatsApp_Image_2024-07-06_at_15.52.25_2c41065f_nwlfew.jpg",
      downloadLink:
        "https://www.spin101agent.com?code=P4CGPUB9C1X&t=1719288040",
    },
    {
      name: "Yono Game",
      ranking: "https://rummybonusapp.com/kr/assets/20230731_154129.webp",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.38_AM_1_kc45bm.jpg",
      downloadLink: "https://yonofreecash.com?code=7NYS7DVE&t=1720671810",
    },
  ],
  setBears: (apps) => set({ topApps: apps }),
}));

export const useGamesAppStore = create((set) => ({
  games: [
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
  ],
  setGames: (apps) => set({ games: apps }),
}));

export const usebestForAllGamesStore = create((set) => ({
  bestForAllGames: [
    {
      name: "EN 365",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹20-₹238",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1723097562/Rummy-Logos/gfjsazmgnmggljmxpjyo.jpg",
      downloadLink: "https://www.en365.in?code=1LNK6S9ZVS9&t=1722077558",
    },
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
      downloadLink: "https://yonogamesearn.com?code=7NYS7DVE&t=1722978147",
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
  ],
  setbestForAllGames: (apps) => set({ bestForAllGames: apps }),
}));

export const useNewAppsStore = create((set) => ({
  newApps: [
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
      name: "Yono Game",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹30-₹100",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.38_AM_1_kc45bm.jpg",
      downloadLink: "https://yonogamesearn.com?code=7NYS7DVE&t=1722978147",
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
  ],
  setbestForAllGames: (apps) => set({ newApps: apps }),
}));

export const useTeenPattiStore = create((set) => ({
  teenPatti: [
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
  ],
  setTeenPatti: (apps) => set({ teenPatti: apps }),
}));