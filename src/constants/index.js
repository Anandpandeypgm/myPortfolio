import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [  
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },

 {
    title: "AI/ML/Dapps/LLM model based apps",
    icon: mobile,
  },

  {
    title: "Full Stack Developer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Android Developer",
    icon: mobile,
    iconBg: "#383E56",
    date: "2021 - october 2022",
    points: [
      "Led 'E-Commerce Mobile App': Enhanced user engagement by 30% with Kotlin, MVVM.",
      "Collaborated with teams to deliver high-quality Android apps.",
      "Implemented responsive UIs, ensuring compatibility across devices.",
      "Developed 'Social Networking App' for professionals, featuring live chat, news feed, and profile customization, which boosted user retention by 20%. Technologies used: Kotlin, Firebase, Jetpack Compose.",
      ,
    ],
  },
  {
    title: "Mobile app development",

    icon: mobile,
    iconBg: "#E6DEDD",
    date: "2022 - Feb 2023",
    points: [
      "'Travel Companion App': Flutter app with Google Maps API, python backend.",
      "'Budget Tracker App': KMM for shared logic, Stripe for transactions, Django backend.",
      "'Recipe Sharing Platform': Flutter, GraphQL, Apollo Server, MongoDB.",
      "'Event Management App': KMM, integrated calendar, Flask and PostgreSQL backend.",
      "'Fitness Community App': Flutter, Bluetooth API for wearable data, Firebase backend.",
    ],
  },
  {
    title: "AI-ML Model based app ",
    icon: mobile,
    iconBg: "#383E56",
    date: "2023 - sep 2023",
    points: [
      "'Smart Health Monitoring': AI/ML for health analytics, Python/TensorFlow backend.",
      "'Decentralized Social Network': Ethereum blockchain, smart contracts, IPFS storage.",
      "'Personalized Learning Platform': LLM adaptive learning, Django, GPT-3 API.",
      "'Automated Financial Advisor': AI/ML market analysis, Flask, financial APIs.",
      "'Real-time Language Translation': LLM for voice/text translations, python, OpenAI API.",
    ],
  },
  {
    title: "Full stack Mobile App Developer",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: " 2023 - Present",
    points: [
      "Backend development with Spring Boot for RESTful APIs.",
      "Real-time analytics with Spring WebFlux for scalability.",
      "Messaging with Apache Kafka for microservices communication.",
      "Secured user data with Spring Security and OAuth2.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a app as beautiful as our product, but Anand proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a App Developer who truly cares about their clients' success like Anand does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Anand optimized our product , our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
