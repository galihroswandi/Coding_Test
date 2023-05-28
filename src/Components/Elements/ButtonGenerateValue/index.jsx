import Button from "../FormNumber/Button";

const ButtonGenerateValue = (props) => {
  const { title, handleClick } = props;
  return (
    <div className="w-full flex justify-center mt-5">
      <Button handleClick={handleClick} title={title} />
    </div>
  );
};
export default ButtonGenerateValue;
