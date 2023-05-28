import LinkSee from "../Elements/LinkSee";
import Desc from "../Elements/Desc";
import Computer3D from "./../../assets/img/Computer 3D.png";
import "animate.css";

const DescHeader = () => {
  return (
    <header className="sm:flex sm:items-center sm:justify-between sm:mt-8">
      <section className="sm:w-[100%] xl:w-[120%]">
        <Desc />
        <LinkSee />
      </section>
      <section className="sm:w-[70%] md:w-[80%] sm:-translate-x-10">
        <img
          src={Computer3D}
          alt="Computer Logo"
          className="mt-8 mx-auto w-full animate__animated animate__backInDown animate__slow"
        />
      </section>
    </header>
  );
};

export default DescHeader;
