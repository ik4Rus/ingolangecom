import {
  Hero,
  MatrixBG,
  Navbar,
  Projects,
  Skills,
} from "@/components/Specific";
import Footer from "@/components/Specific/Footer";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen overflow-hidden">
        <div className="absolut inset-0">
          <MatrixBG />
        </div>
        <div className="flex flex-col text-white w-full px-12 mx-auto max-w-7xl">
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}
