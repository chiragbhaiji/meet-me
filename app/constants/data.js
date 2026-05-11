import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const data = {
  fullName: "Chirag Bhaiji",
  currentRole: "Senior Software Engineer",
  shortBio: "Crafting mobile and web experiences from your brightest ideas.",
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=1UbgcC-YqOp-SyKXIg4Aamrvug1CckjTk",
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
  description: [
    "I'm a developer passionate about creating seamless, user-friendly applications that combine thoughtful design with robust engineering. I specialize in mobile development, building cross-platform apps with React Native and native iOS applications using Swift. I also have experience working with React for web app development, enabling me to deliver end-to-end solutions across platforms.",
    "With over a decade of experience, I've worked across diverse environments, from start-ups to established organizations, leading teams, architecting scalable solutions, and managing clients to ensure their requirements are understood and delivered effectively. My ability to bridge the gap between technical and business needs has been key to delivering impactful, high-performance applications.",
    "Outside of work, I enjoy listening to music, watching comedy shows, and traveling, drawing inspiration from new experiences and cultures to bring fresh perspectives to my work.",
  ],
  experiences: [
    {
      company: {
        name: "PwC Acceleration Center",
        url: "https://jobs-ta.pwc.com/global/en/ACs-in-India-Career-Site",
      },
      role: "Manager (React Native)",
      duration: {
        start: "2025-04-02",
        end: "2026-02-22",
      },
      description: [
        "Led the React Native team on Savvy, an enterprise field-operations app for PepsiCo employees covering end-to-end merchandising and ordering.",
        "Shipped 5 features within a cross-functional delivery structure while bridging offshore teams, PwC leadership, and PepsiCo stakeholders.",
        "Resolved 10+ critical production issues to stabilize the app and clear the defect backlog.",
        "Standardized AI-assisted code review across the team using a reusable prompt library, making AI the first pass on every PR.",
        "Cut new developer ramp-up time from 2+ weeks to ~1 week by writing comprehensive onboarding docs and developer guides.",
      ],
      skillsUsed: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "SalesforceSDK",
        "AppDynamics",
        "Fastlane",
        "GitHub Actions",
      ],
    },
    {
      company: {
        name: "Thrive Now (Hashtag Loyalty)",
        url: "https://thrivenow.in",
      },
      role: "Senior React Native Developer",
      duration: {
        start: "2024-02-21",
        end: "2024-12-13",
      },
      description: [
        "Built Rewards, Customer Feedback, and Personalized Ratings features end-to-end for the Thrive food discovery app, driving a 30% increase in user engagement.",
        "Replaced a third-party Carousel with a custom Reanimated component, cutting RAM usage by 40-50% and improving scroll performance.",
        "Led a codebase-wide refactor that reduced technical debt by 20%, improving maintainability and code review speed.",
        "Integrated Sentry for performance monitoring and uploaded debug symbols, reducing stack trace resolution time from days to hours.",
        "Used AI tools (Cursor, GitHub Copilot, Claude) daily to cut root cause identification time in production issues by 50-60%.",
      ],
      skillsUsed: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "React Query",
        "Reanimated",
        "Sentry",
        "Firebase",
      ],
    },
    {
      company: {
        name: "EPAM Systems",
        url: "https://www.epam.com",
      },
      role: "Lead Software Developer",
      duration: {
        start: "2023-07-10",
        end: "2024-02-20",
      },
      description: [
        "Delivered the Surveys module (the most business-critical feature of Bloom, a patient-centric app for remote clinical trial participation) end-to-end within 5 days of joining, directly unblocking a stalled release milestone.",
        "Diagnosed broken deep link flows for email verification and password reset, then built a generalized integration pattern that scales to all future features.",
        "Built the Rewards feature and refactored a fragmented healthcare provider form into a single composable component supporting 4 distinct usage scenarios.",
      ],
      skillsUsed: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "React Query",
        "Firebase",
        "Deep Linking",
        "REST API",
      ],
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
      description: [
        "Sole React Native developer across three products.",
        "On Head On, built the In-App Purchases flow and push notification system enabling monetization and re-engagement.",
        "On Turtle Method, automated 90% of manual coach workflows (scheduling, tracking, and reporting) and integrated Apple Health, Fitbit, and Garmin APIs for real-time biometric syncing, eliminating manual data entry.",
        "Built 3 of 6 Neeto suite apps from scratch and automated iOS/Android release pipelines via Fastlane, removing manual distribution steps entirely.",
      ],
      skillsUsed: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "React Query",
        "Reanimated",
        "Lottie",
        "Apple IAP",
        "Apple Health",
        "Fastlane",
        "Firebase",
        "Storybook",
      ],
    },
    {
      company: {
        name: "Deqode Solutions",
        url: "https://www.deqode.com",
      },
      role: "Team Lead | Senior Solution Engineer",
      duration: {
        start: "2017-04-17",
        end: "2021-05-26",
      },
      description: [
        "Joined as sole founding engineer on PumaPay, a DeFi payment protocol; shipped the first production version, then grew and led the engineering team from 0 to 15 engineers.",
        "Rebuilt the legacy hybrid app from scratch in native Swift and architected it as a white-label platform delivering full per-client customization within a one-month window.",
        "For Patientory, designed and built a Swift SDK for Hyperledger blockchain interaction from scratch, and integrated IPFS for distributed health record storage, removing the single point of failure of centralized file hosting.",
      ],
      skillsUsed: [
        "iOS App Development",
        "Swift",
        "React Native",
        "JavaScript",
        "Blockchain",
        "Web3.js",
        "Hyperledger",
        "IPFS",
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
      description: [
        "Developed and maintained native iOS applications for enterprise clients including Red Hat Partner Connect, a B2B matchmaking app for contract-based partnerships.",
        "Built a real-time partner chat feature using Socket.io, and refactored a screen with 20+ dynamic form fields using OOP patterns, reducing complexity and maintenance overhead.",
        "Partnered with business analysts and clients to translate ambiguous requirements into scoped technical solutions, reducing rework from unclear specs.",
      ],
      skillsUsed: ["iOS", "Swift", "Objective-C", "Socket.io", "OOP", "TDD"],
    },
  ],
  projects: [
    {
      name: "Thrive: Online Food Delivery",
      url: "https://thrivenow.in",
      description: [
        "Food discovery and ordering app with a social platform for foodies.",
        "Built Rewards, Customer Feedback, and Personalized Ratings end-to-end, driving a 30% increase in user engagement.",
        "Replaced a third-party Carousel with a custom Reanimated component, cutting RAM usage by 40-50% and improving scroll performance.",
      ],
      skillsUsed: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "React Query",
        "Reanimated",
        "Sentry",
        "Firebase",
        "RazorPay",
        "CleverTap",
        "Mixpanel",
        "Growthbook",
        "User Experior",
      ],
    },
    {
      name: "Bloom - IQVIA",
      url: "https://www.iqvia.com",
      description: [
        "Patient-centric app for remote and incentivized clinical trial participation.",
        "Delivered the Surveys module, the most business-critical feature, end-to-end within 5 days of joining, directly unblocking a stalled release milestone.",
        "Built a generalized deep link integration pattern for email verification and password reset that scales to all future features.",
      ],
      skillsUsed: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "React Query",
        "Firebase",
        "Deep Linking",
        "REST API",
      ],
    },
    {
      name: "Head On: Stress & Anxiety",
      url: "https://headon.app",
      description: [
        "Psychologist-designed app for managing stress, anxiety, and emotional balance.",
        "Built the In-App Purchases flow and push notification system enabling monetization and daily re-engagement.",
        "Developed a reusable library of animated custom UI components with Reanimated and Lottie, powering micro-interactions across all core screens.",
      ],
      skillsUsed: [
        "React Native",
        "TypeScript",
        "Reanimated",
        "Lottie",
        "Apple IAP",
        "Firebase",
        "Push Notifications",
        "Context API",
      ],
      appLinks: [
        {
          name: "iOS",
          url: "https://apps.apple.com/gb/app/head-on-stress-anxiety/id6444063799",
        },
      ],
    },
    {
      name: "Turtle Method",
      url: "https://app.turtlemethod.com",
      description: [
        "Personalized health coaching and diet tracking app for fat loss and fitness.",
        "Automated 90% of manual coach workflows (scheduling, tracking, and reporting), increasing client capacity per coach.",
        "Integrated Apple Health, Fitbit, and Garmin APIs for automatic biometric syncing, eliminating manual data entry and enabling real-time progress tracking for coaches.",
      ],
      skillsUsed: [
        "React Native",
        "TypeScript",
        "Redux",
        "Reanimated",
        "Apple Health",
        "Fitbit API",
        "Garmin API",
        "Firebase",
        "Video & Audio Player",
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
      description: [
        "SaaS productivity apps: neetoInvoice (invoicing), neetoCal (meeting scheduling), and neetoDesk (help desk ticketing).",
        "Participated in building 3 of 6 apps from scratch",
        "Automated iOS and Android release pipelines via Fastlane, removing all manual distribution steps, and ran competitive analysis that directly shaped the product roadmap.",
      ],
      skillsUsed: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "React Query",
        "Fastlane",
        "Storybook",
        "Reanimated",
        "React hook-form",
      ],
    },
    {
      name: "PumaPay: DeFi Payment Wallet",
      url: "https://pumapay.com",
      description: [
        "DeFi payment protocol for peer-to-peer transactions via advanced billing models.",
        "Joined as sole founding engineer, shipped the first production version, then grew the engineering team from 0 to 15.",
        "Architected the app as a white-label platform delivering full per-client customization within a one-month window, and wrote a script to automate per-client theme and feature generation.",
      ],
      skillsUsed: [
        "Swift",
        "iOS",
        "ReactJs",
        "Blockchain",
        "Web3.js",
        "White-Label Architecture",
        "REST API",
        "JSON RPC",
      ],
    },
    {
      name: "Patientory",
      url: "https://patientory.com",
      description: [
        "Decentralized mobile app for secure health information storage using blockchain.",
        "Designed and built a Swift SDK for Hyperledger blockchain interaction from scratch, forming the core integration layer between the app and the network.",
        "Integrated IPFS for distributed health record storage, eliminating the single point of failure of centralized file hosting.",
      ],
      skillsUsed: [
        "Swift",
        "iOS",
        "Hyperledger",
        "Blockchain",
        "IPFS",
        "REST API",
      ],
      appLinks: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.patientory.app",
        },
      ],
    },
    {
      name: "Red Hat Partner Connect",
      url: "",
      description: [
        "B2B matchmaking app for finding Red Hat business partners for contract-based collaboration.",
        "Built a real-time partner chat feature using Socket.io, and refactored a screen with 20+ dynamic form fields using OOP patterns, reducing complexity and maintenance overhead.",
        "Partnered with business analysts and clients to translate ambiguous requirements into scoped technical solutions.",
      ],
      skillsUsed: ["Swift", "Socket.io", "OOP", "TDD"],
    },
  ],
};
