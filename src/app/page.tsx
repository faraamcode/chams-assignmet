
import TopBar from "../components/topbar";
import CategoryBar from "../components/categoryBar";
import Dashboard from "../components/dashboard";
import NewsLetter from "@/components/newsLetter";
import Footer from "../components/footer";
import { AppProvider } from "@/context/provider";
import Cart from "@/components/cart";




export default function Home() {
  return (
    <>
      <AppProvider>
        <TopBar />
        <CategoryBar />
        <Dashboard />
        <NewsLetter />
        {/* <Cart /> */}
        <Footer />
      </AppProvider>

    </>
  );
}
