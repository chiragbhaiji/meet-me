import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { data } from "./constants/data";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 px-6 py-8 max-w-6xl mx-auto sm:p-16">
      <Header
        fullName={data.fullName}
        currentRole={data.currentRole}
        shortBio={data.shortBio}
        socialLinks={data.socialLinks}
      />
      <About description={data.description} />
      <Experience experiences={data.experiences} />
      <Projects projects={data.projects} />
      <Footer />
    </div>
  );
}
