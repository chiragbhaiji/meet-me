import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

import { data } from "./constants/data";

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
