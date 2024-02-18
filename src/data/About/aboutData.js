import { Linkedin, GitHub, Twitter, Mail } from "react-feather";

export const SOCIAL_LINKS = [
  {
    id: 1,
    icon: <Linkedin />,
    name: "LinkedIn",
    link: "",
  },
  {
    id: 2,
    icon: <GitHub />,
    name: "Github",
    link: "",
  },
  {
    id: 3,
    icon: <Twitter />,
    name: "Twitter",
    link: "",
  },
  {
    id: 4,
    icon: <Mail />,
    name: "Email",
    link: "",
  },
];

export const INFO_LIST = [
  {
    id: 1,
    title: "Me in a sentence",
    description: [
      `I am a software engineer with around one year of working experience
        in React.js. Flex-box is my swiss knife and Next.js is my workhorse.
        Oh! and building stuffs that actually solves problems is so fun.`,
    ],
    colspan: "6",
    rowspan: "1",
  },
  {
    id: 2,
    title: "Education",
    description: [
      `Though I am an electrical engineer, I have always been fascinated
      by the world of computers and software.`,
      `I have always been at the top of my 
      class during my graduation.`,
      `I graduated from the MAKAUT (WBUT) with a CGPA 
      of 8.58/10 in 2020.`,
      `Never had any backlogs in my entire academic career.`,
      `I have completed my secondary education from the ICSE board in
      2014 and higher secondary education from the ISC board in 2016.`,
    ],
    colspan: "2",
    rowspan: "4",
  },
  {
    id: 3,
    title: null,
    description: [
      ` "Any fool can write code that a computer can understand. Good
    programmers write code that humans can understand."`,
      `- Martin Fowler`,
    ],
    colspan: "2",
    rowspan: "2",
  },
  {
    id: 4,
    title: "Hobbies:",
    description: [
      ` I love singing, playing guitar, composing music, writing songs,
    writing poems. Oh yes! and also love watching animes.`,
    ],
    colspan: "2",
    rowspan: "2",
  },
  {
    id: 5,
    title: "Relevant experience",
    description: [
      `I embarked on my journey with React JS over two years ago, delving 
      into its intricacies and potentials. For the past year and a half, 
      I've been dedicatedly serving as a front-end engineer at ASL (Uniacco).`,
    ],
    colspan: "4",
    rowspan: "2",
  },
  {
    id: 6,
    title: null,
    description: [
      `If I were a Pixar character, the image on the left is precisely what I
    would resemble.`,
    ],
    colspan: "3",
    rowspan: "1",
  },
  {
    id: 7,
    title: null,
    description: [
      `I made this section so that people would never have to look at my CV
    again. Therefore, I mentioned all the important stuff here.`,
    ],
    colspan: "3",
    rowspan: "1",
  },
];
