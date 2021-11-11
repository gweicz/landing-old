import LayoutHead from "components/Layout/LayoutHead";
import Header from "components/Header/Header";
import Introduction from "components/Introduction/Introduction";
import Projects from "components/Projects/Projects";
import SupportUs from "components/SupportUs/SupportUs";
import Blog from "components/Blog/Blog";
import Footer from "components/Footer/Footer";

export default function Home() {
  return (
    <div className="app">
      <LayoutHead />

      <Header />
      <Introduction />
      <Projects />
      <Footer />
    </div>
  )
}
