import { useDispatch } from "react-redux";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import { setFinalPoint, setHide } from "../../../store/reducers";
import { cleanInput } from "../../../utils/CleanInput.util";

const FormNumber = (props) => {
  const { name } = props;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setFinalPoint(cleanInput(e.target[0].value)));
    dispatch(setHide("hide"));
  };

  return (
    <form onSubmit={handleClick}>
      <Label name={name} />
      <Input name={name} />
      <Button title="Continue" classname="float-right mt-4" />
    </form>
  );
};

export default FormNumber;
