import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Badge = {
  text: string;
  icon: IconProp;
  disabled?: boolean;
};

const shiftsPerMonth = [
  {
    month: "März",
    shifts: 8,
    setupTimes: [5, 10],
    averageSetupTime: 7.5,
  },
  {
    month: "April",
    shifts: 10,
    setupTimes: [2, 14],
    averageSetupTime: 10,
  },
  {
    month: "Mai",
    shifts: 7,
    setupTimes: [5, 10],
    averageSetupTime: 7.5,
  },
  {
    month: "Juni",
    shifts: 9,
    setupTimes: [2, 7],
    averageSetupTime: 3,
  },
  {
    month: "Juli",
    shifts: 8,
    setupTimes: [5, 10],
    averageSetupTime: 7.5,
  },
  {
    month: "August",
    shifts: 10,
    setupTimes: [2, 7],
    averageSetupTime: 3,
  },
  {
    month: "September",
    shifts: 7,
    setupTimes: [5, 10],
    averageSetupTime: 7.5,
  },
  {
    month: "Oktober",
    shifts: 9,
    setupTimes: [2, 7],
    averageSetupTime: 3,
  },
  {
    month: "November",
    shifts: 8,
    setupTimes: [5, 10],
    averageSetupTime: 7.5,
  },
  {
    month: "Dezember",
    shifts: 10,
    setupTimes: [2, 7],
    averageSetupTime: 3,
  },
  {
    month: "Januar",
    shifts: 7,
    setupTimes: [5, 10],
    averageSetupTime: 7.5,
  },
  {
    month: "Februar",
    shifts: 9,
    setupTimes: [2, 7],
    averageSetupTime: 3,
  },
];

const shiftsDriven = shiftsPerMonth.reduce((acc, cur) => acc + cur.shifts, 0);

export default {
  shiftsDriven,
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
      place: 2,
      name: "Felix T.",
      shifts: shiftsDriven,
      company: "SW",
    },
    {
      place: 1,
      name: "Mohammed M.",
      shifts: 200,
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
  shiftsPerMonth,
} as {
  shiftsDriven: number;
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
    setupTimes: number[];
    averageSetupTime: number;
  }[];
};
