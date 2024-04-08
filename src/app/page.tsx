import About from "./components/utils/about";
import Footer from "./components/utils/footer";
import Gallery from "./components/utils/gallery";
import Hero from "./components/utils/hero";
import NavBar from "./components/utils/navBar";
import News from "./components/utils/news";
import TopBar from "./components/utils/topBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Hero />
      <About/>
      <Gallery/>
      <News/>
      <Footer/>
    </>
  );
}
