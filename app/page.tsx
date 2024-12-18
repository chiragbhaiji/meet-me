import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { data } from "./constants/data";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="py-8 sm:py-16 [&>*:not(:nth-child(2))]:mt-16">
      <div className="px-6 max-w-6xl mx-auto ">
        <Header
          fullName={data.fullName}
          currentRole={data.currentRole}
          shortBio={data.shortBio}
        />
      </div>
      <NavBar socialLinks={data.socialLinks} resumeUrl={data.resumeUrl} />
      <div className="px-6 max-w-6xl mx-auto ">
        <About description={data.description} />
        <Experience experiences={data.experiences} />
        <Projects projects={data.projects} />
        <Footer />
      </div>
    </div>
  );
}
