import "animate.css";

const Card = (props) => {
  const { children, hidden } = props;
  return (
    <div
      className={`bg-white p-5 w-full flex flex-col justify-center items-center relative rounded-md animate__animated animate__zoomIn animate__slow transition-all duration-500 ${
        hidden && `hide`
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
