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
        name: "Hashtag Loyalty",
        url: "https://www.hashtagloyalty.com",
      },
      role: "Senior Software Engineer",
      duration: {
        start: "2024-02-20",
      },
      description:
        "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      skillsUsed: ["React Native", "React", "TypeScript"],
      appLinks: [
        { name: "App Store", url: "https://apps.apple.com/app/id1234567890" },
      ],
    },
    {
      company: {
        name: "EPAM Systems",
        url: "https://www.epam.com",
      },
      role: "Lead Software Engineer",
      duration: {
        start: "2023-07-10",
        end: "2024-02-20",
      },
      description:
        "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      skillsUsed: ["React Native", "React", "TypeScript"],
      appLinks: [
        { name: "iOS", url: "https://apps.apple.com/app/id1234567890" },
        { name: "Android", url: "https://apps.apple.com/app/id1234567890" },
      ],
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
