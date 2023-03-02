import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Badge = {
  text: string;
  icon: IconProp;
  disabled?: boolean;
};

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
      disabled: true,
    },
    {
      text: "Du bist an Silvester gefahren",
      icon: "flask",
    },
    {
      text: "Du bist am Zuckerfest gefahren",
      icon: "star",
      disabled: true,
    },
    {
      text: "Du bist an Weihnachten gefahren",
      icon: "tree",
    },
    {
      text: "Weniger als 3x krank in 365 Tagen",
      icon: "rocket",
    },
    {
      text: "Du hast deinen ersten Betriebsdienst erledigt",
      icon: "handshake",
      disabled: true,
    },
    {
      text: "Du bist 5 Wochen in Folge mindestens 1 Schicht gefahren",
      icon: "briefcase",
    },
  ],
  leaderboard: [
    {
      place: 1,
      name: "Felix T.",
      shifts: 100,
      company: "SW",
    },
    {
      place: 2,
      name: "Mohammed M.",
      shifts: 99,
      company: "SO",
    },
    {
      place: 3,
      name: "Max T.",
      shifts: 90,
      company: "SW",
    },
    {
      place: 4,
      name: "Florian T.",
      shifts: 80,
      company: "SO",
    },
  ],
  shiftsPerMonth: [
    {
      month: "März",
      shifts: 8,
    },
    {
      month: "April",
      shifts: 10,
    },
    {
      month: "Mai",
      shifts: 7,
    },
    {
      month: "Juni",
      shifts: 9,
    },
    {
      month: "Juli",
      shifts: 8,
    },
    {
      month: "August",
      shifts: 10,
    },
    {
      month: "September",
      shifts: 7,
    },
    {
      month: "Oktober",
      shifts: 9,
    },
    {
      month: "November",
      shifts: 8,
    },
    {
      month: "Dezember",
      shifts: 10,
    },
    {
      month: "Januar",
      shifts: 7,
    },
    {
      month: "Februar",
      shifts: 9,
    },
  ],
} as {
  badges: Badge[];
  leaderboard: {
    place: number;
    name: string;
    shifts: number;
    company: string;
  }[];
  shiftsPerMonth: {
    month: string;
    shifts: number;
  }[];
};
