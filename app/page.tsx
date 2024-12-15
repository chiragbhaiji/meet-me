import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const data = {
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
      imgUrl:
        "https://cdn.prod.website-files.com/5ec9144206d25c7db40eaa64/65d2e8d13b093288f87469fe_Layer%201.svg",
      url: "https://about.thrivenow.in",
      description:
        "Led development of key features like rewards and rating systems, boosting user engagement by 30%. Improved app performance through custom component development and code optimization, resulting in reduced RAM usage and 20% less technical debt. Enhanced monitoring and debugging capabilities by upgrading Sentry integration, while maintaining high security standards and development best practices.",
      skillsUsed: [
        "React Native",
        "React",
        "TypeScript",
        "Swift",
        "Android Studio",
        "XCode",
        "Cursor",
        "Figma",
      ],
      appLinks: [
        {
          name: "App Store",
          url: "https://apps.apple.com/in/app/thrive-online-food-delivery/id1660752275",
        },
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.thrivenow&hl=en_IN",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col gap-16 p-16 max-w-6xl mx-auto">
      <Header
        fullName={data.fullName}
        currentRole={data.currentRole}
        shortBio={data.shortBio}
        socialLinks={data.socialLinks}
      />
      <About description={data.description} />
      <Experience experiences={data.experiences} />
      <Projects projects={data.projects} />
    </div>
  );
}
