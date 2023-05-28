const LinkSee = () => {
  const scrollToView = () => {
    const main = document.getElementById("main");
    main?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToView}
      className="text-base rounded bg-white text-primary py-2 px-6 mt-5 xl:mt-10 active:bg-slate-200 focus:ring-2 xl:text-lg inline-block cursor-pointer"
    >
      See More
    </button>
  );
};

export default LinkSee;
