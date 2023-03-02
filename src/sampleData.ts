import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default {
  badges: [
    {
      text: "Du bist seit 3 Monaten Fahrer",
      icon: "rocket",
    },
    {
      text: "Du bist seit 6 Monaten Fahrer",
      icon: "rocket",
    },
    {
      text: "Du bist seit 1 Jahr Fahrer",
      icon: "rocket",
    },
    {
      text: "Du bist an Silvester gefahren",
      icon: "rocket",
    },
    {
      text: "Du bist am Zuckerfest gefahren",
      icon: "rocket",
    },
    {
      text: "Du bist an Weihnachten gefahren",
      icon: "rocket",
    },
    {
      text: "Weniger als 3x krank in 365 Tagen",
      icon: "rocket",
    },
    {
      text: "Du hast deinen ersten Betriebsdienst erledigt",
      icon: "rocket",
    },
    {
      text: "Du bist 5 Wochen in Folge mindestens 1 Schicht gefahren",
      icon: "rocket",
    },
  ],
  leaderboard: [
    {
      name: "Felix T.",
      shifts: 100,
    },
    {
      name: "Mohammed M.",
      shifts: 99,
    },
    {
      name: "Max T.",
      shifts: 90,
    },
    {
      name: "Florian T.",
      shifts: 80,
    },
  ],
} as {
  badges: {
    text: string;
    icon: IconProp;
  }[];
  leaderboard: {
    name: string;
    shifts: number;
  }[];
};
