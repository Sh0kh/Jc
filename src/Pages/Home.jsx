import Header from "../Components/Header";
import BigCompany from "../Components/Home/BigCompany";
import Calculator from "../Components/Home/Calculator";
import FooterMini from "../Components/Home/FooterMini";
import Gallary from "../Components/Home/Gallary";
import Hero from "../Components/Home/Hero";
import Houe from "../Components/Home/Houe";
import Paragraph from "../Components/Home/Paragraph";
import Project from "../Components/Home/Project";
import Work from "../Components/Home/Work";

export default function Home() {





  return (
    <main className="">
      <Header />
      <Hero />
      <Work />
      <Houe />
      <Paragraph />
      <Calculator />
      <BigCompany />
      <Project />
      <Gallary />
      <FooterMini />
    </main>
  );
}
