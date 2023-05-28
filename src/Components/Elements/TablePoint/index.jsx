import { useSelector } from "react-redux";
import Point from "./Point";

const TablePoint = () => {
  const dataRandom = useSelector((state) => state.main.dataRandom);

  return (
    dataRandom.length > 0 && (
      <div className="border border-primary flex flex-wrap gap-2 p-2 w-full max-h-40 overflow-y-auto">
        {dataRandom.map((el, index) => {
          return (
            <div key={index}>
              <Point value={el} />
            </div>
          );
        })}
      </div>
    )
  );
};

export default TablePoint;
