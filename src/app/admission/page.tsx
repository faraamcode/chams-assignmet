import About from "../components/utils/about";
import Admission from "../components/utils/admission";
import AdmissionInfo from "../components/utils/admissionInfo";
import Connect from "../components/utils/connect";
import Corousel from "../components/utils/corousel";
import Director from "../components/utils/director";
import Footer from "../components/utils/footer";
import Gallery from "../components/utils/gallery";
import Hero from "../components/utils/hero";
import NavBar from "../components/utils/navBar";
import News from "../components/utils/news";
import Schedule from "../components/utils/schedule";
import Team from "../components/utils/team";
// import TopBar from "./components/utils/topBar"

export default function Home() {
    return (
        <>
            {/* <TopBar /> */}
            <NavBar />
            <AdmissionInfo />
            <Admission />
            <Footer />
        </>
    );
}
