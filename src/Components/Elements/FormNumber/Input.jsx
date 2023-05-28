const Input = (props) => {
  const { name } = props;
  return (
    <input
      type="number"
      name={name}
      id={name}
      placeholder="Type Here..."
      min={1}
      max={10000}
      className="text-primary border border-primary w-full mt-4 py-2 px-5 outline-none rounded-sm"
    />
  );
};

export default Input;
