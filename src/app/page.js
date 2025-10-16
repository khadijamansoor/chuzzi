import Header from "./components/header";
import Hero from "./components/hero";
import AboutMe from "./components/aboutme";
import Services from "./components/services";
import MySkills from "./components/myskills";
import Resume from "./components/resume";
import Portfolios from "./components/portfolios";
import Reviews from "./components/reviews";
import Blog from "./components/blog";
import Footer from "./components/footer";




export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Services />
      <MySkills />
      <Resume />
      <Portfolios />
      <Reviews />
      <Blog />
      <Footer />
    </div>
  );
}
