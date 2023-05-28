const Button = (props) => {
  const { title, classname, handleClick } = props;
  return (
    <button
      type="submit"
      onClick={handleClick}
      className={`bg-yellow-second py-1.5 px-4 rounded-sm text-sm text-primary md:text-base ${classname}`}
    >
      {title}
    </button>
  );
};

export default Button;
