import Footer from "../Components/Elements/Footer";
import Cards from "../Components/Fragments/Cards";
import DescHeader from "../Components/Fragments/DescHeader";

function Home() {
  return (
    <div className="px-5 py-6 sm:px-8 sm:py-2 lg:px-20 min-h-screen relative">
      <DescHeader />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
