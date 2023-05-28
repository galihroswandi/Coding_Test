const Label = (props) => {
  const { name } = props;
  return (
    <label htmlFor={name} className="text-primary lg:text-lg">
      Enter a Number From 1-10000
    </label>
  );
};

export default Label;
