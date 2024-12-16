import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const data = {
  fullName: "Chirag Bhaiji",
  currentRole: "Senior Software Engineer",
  shortBio:
    "Experienced React Native Developer crafting scalable mobile & web applications with a passion for innovation & impact.",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chiragbhaiji/",
      icon: <FaLinkedinIn size={24} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/chiragbhaiji",
      icon: <FaGithub size={24} />,
    },
  ],
  description: `I'm an experienced software engineer with 10+ years of experience building mobile applications using React Native and Swift. I believe that a great user experience is critical to the success of any application, and I work hard to ensure that every project I work on is visually appealing, intuitive to use, and meets the needs of its target audience.
            I have experience managing clients and leading tech teams to build scalable products. I understand the importance of communication and teamwork in software development, so I make sure to create a work environment where everyone feels comfortable sharing ideas and working together. I believe in being honest and responsible, so I make sure everyone is accountable for their work.
            I am always eager to learn and grow as a software engineer, and I am committed to delivering high-quality solutions that meet the needs of my clients and users.`,
  experiences: [
    {
      company: {
        name: "Thrive Now",
        url: "https://thrivenow.in",
      },
      role: "Senior React Native Developer",
      duration: {
        start: "2024-02-21",
        end: "2024-12-13",
      },
      description:
        "Built and maintained critical features for the consumer mobile application, ensuring scalability and performance. Collaborated closely with cross-functional teams, including developers, designers, and stakeholders, to deliver user-centric solutions and drive best practices in mobile application development",
      skillsUsed: ["React Native", "React", "JavaScript", "TypeScript"],
    },
    {
      company: {
        name: "EPAM",
        url: "https://www.epam.com",
      },
      role: "Lead Software Engineer",
      duration: {
        start: "2023-07-10",
        end: "2024-02-20",
      },
      description:
        "Led and mentored junior developers, ensuring their growth and alignment with project goals. Collaborated with the mobile team to share innovative ideas, drive technical advancements, and maintain synchronization with evolving technologies.",
      skillsUsed: ["React Native", "React", "JavaScript", "TypeScript"],
    },
    {
      company: {
        name: "BigBinary",
        url: "https://www.bigbinary.com",
      },
      role: "Software Engineer",
      duration: {
        start: "2021-06-01",
        end: "2023-07-07",
      },
      description:
        "Served as the sole React Native developer, taking full ownership of the development lifecycle—from gathering requirements to delivering tested features. I also contributed to internal Neeto products and shared my insights through technical blogs, fostering a culture of learning and knowledge sharing within the team.",
      skillsUsed: [
        "React Native",
        "JavaScript",
        "TypeScript",
        "Redux",
        "ReactQuery",
        "Reanimated",
      ],
    },
    {
      company: {
        name: "Deqode",
        url: "https://www.deqode.com",
      },
      role: "Tech Lead | Senior Solution Engineer",
      duration: {
        start: "2017-04-17",
        end: "2021-05-26",
      },
      description:
        "Led the development of a hybrid app from scratch in Swift, boosting speed and scalability. Managed a team of 15, ensuring smooth project delivery and client satisfaction while driving technical innovations.",
      skillsUsed: [
        "iOS App Development",
        "Swift",
        "JavaScript",
        "React Native",
        "React",
        "Blockchain",
      ],
    },
    {
      company: {
        name: "Webonise Lab (now Haptiq)",
        url: "https://www.haptiq.com",
      },
      role: "Software Developer",
      duration: {
        start: "2014-06-27",
        end: "2017-03-22",
      },
      description:
        "Developed and maintained native iOS mobile applications for different clients. Built features like real-time chat and handle dynamic utilizing OOP concepts. Collaborated closely with clients and business analysts to translate requirements into functional, scalable solutions, ensuring a seamless user experience across various platforms.",
      skillsUsed: ["iOS", "Swift", "Objective-C"],
    },
  ],
  projects: [
    {
      name: "Thrive: Online Food Delivery",
      url: "https://thrivenow.in",
      description:
        "Online food discovery and delivery app with social platform for foodies",
      skillsUsed: [
        "React Native",
        "Redux",
        "TypeScript",
        "RazorPay",
        "CleverTap",
      ],
    },
    {
      name: "Bloom - IQVIA",
      url: "https://www.iqvia.com",
      description:
        "Patient-centric app for remote and incentivized clinical trial participation.",
      skillsUsed: [
        "React Native",
        "Redux",
        "TypeScript",
        "CleverTap",
        "RazorPay",
        "Mixpanel",
      ],
    },
    {
      name: "Head On: Stress & Anxiety",
      url: "https://headon.app",
      description:
        "Psychologist-designed app offering instant techniques to manage stress, anxiety, and restore emotional balance",
      skillsUsed: [
        "React Native",
        "JavaScript",
        "Lottie",
        "Reanimated",
        "In-App Purchases",
      ],
      appLinks: [
        {
          name: "iOS",
          url: "https://apps.apple.com/gb/app/head-on-stress-anxiety/id6444063799",
        },
        {
          name: "Android",
          url: "https://play.google.com/store/apps/details?id=com.bammens.mobile.headon",
        },
      ],
    },
    {
      name: "Turtle Method",
      url: "https://app.turtlemethod.com",
      description:
        "Personalized health coaching and diet tracking app, focusing on nutrition, fitness, and mindset to help users achieve sustainable lifestyle changes.",
      skillsUsed: [
        "React Native",
        "React",
        "JavaScript",
        "Redux",
        "Reanimated",
        "Video & Audio Player",
        "Fitbit & Apple Health Integration",
      ],
      appLinks: [
        {
          name: "iOS",
          url: "https://apps.apple.com/gb/app/health-calorie-coach-turtle/id1570131025",
        },
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.trtle&hl=en",
        },
      ],
    },
    {
      name: "Neeto Suite",
      url: "https://neeto.com",
      description:
        "SaaS products like neetoInvoice (for invoicing), neetoCal (for meeting scheduling), and neetoDesk (for help desk ticketing).",
      skillsUsed: [
        "React Native",
        "Redux",
        "ReactJs",
        "JavaScript",
        "Storybook",
        "ReactQuery",
        "Fastlane",
      ],
    },
    {
      name: "PumaPay: DeFi Payment Wallet",
      url: "https://pumapay.com",
      description:
        "A DeFi Payment wallet to facilitate peer-to-peer transactions via advanced billing models.",
      skillsUsed: [
        "Swift",
        "iOS",
        "ReactJs",
        "JavaScript",
        "Blockchain",
        "DeFi",
        "web3.js",
      ],
    },
    {
      name: "Patientory",
      url: "https://patientory.com",
      description:
        "Decentralized mobile app for secure health information storage using blockchain.",
      skillsUsed: [
        "Swift",
        "iOS",
        "ReactJs",
        "JavaScript",
        "Blockchain",
        "web3.js",
        "IPFS",
      ],
      appLinks: [
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/patientory/id1583534430",
        },
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.patientory.app",
        },
      ],
    },
    {
      name: "Red Hat Partner Connect",
      url: "",
      description:
        "Tinder-like app for finding RedHat business partners for contract-based collaboration.",
      skillsUsed: ["iOS", "Swift", "Socket.io", "OOP", "TDD"],
    },
  ],
};
