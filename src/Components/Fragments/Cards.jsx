import { useDispatch, useSelector } from "react-redux";

import Card from "../Elements/Card";
import FormNumber from "../Elements/FormNumber";
import TablePoint from "../Elements/TablePoint";
import ButtonGenerateValue from "../Elements/ButtonGenerateValue";
import { setDataRandom } from "../../store/reducers";
import { useState } from "react";

const Cards = () => {
  const hide = useSelector((state) => state.main.hide);
  const point = useSelector((state) => state.main.finalPoint);
  const dataRandom = useSelector((state) => state.main.dataRandom);
  const dispatch = useDispatch();

  const [valueShow, setValueShow] = useState(0);
  const [showActive, setShowActive] = useState(false);

  const generateVal = () => {
    const min = -1000000;
    const max = 1000000;

    const dataArr = [];
    for (let i = 0; i < point; i++) {
      // Rumus berikut saya didapatkan dari referensi Google
      // https://www.freecodecamp.org/news/javascript-random-number-how-to-generate-a-random-number-in-js/#range-inclusive
      dataArr.push(Math.floor(Math.random() * (max - min) + min));
    }
    dispatch(setDataRandom(dataArr));
  };

  const handleShowValue = () => {
    const data = Array.from(dataRandom);
    setShowActive(true);
    const [filter] = data.filter((a) => a > 0).sort();
    const finalData = filter ? filter - 2 : 0;

    setValueShow(finalData);
  };

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-x-7 mt-14 pb-16"
      id="main"
    >
      <Card hidden={hide && `hide`}>
        <FormNumber name="number_input" />
      </Card>
      <Card hidden={!hide && `hide`}>
        <div className="w-full">
          <h1 className="text-primary mb-2">Total {point}</h1>
          <TablePoint />
          <ButtonGenerateValue
            handleClick={generateVal}
            title="Generate Value"
          />
        </div>
      </Card>
      <Card hidden={!hide && `hide`}>
        {showActive && (
          <h1 className="text-4xl md:text-5xl text-primary text-center">
            {valueShow}
          </h1>
        )}
        <ButtonGenerateValue handleClick={handleShowValue} title="Show Value" />
      </Card>
    </div>
  );
};

export default Cards;
