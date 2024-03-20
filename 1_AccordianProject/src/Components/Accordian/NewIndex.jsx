import { useState } from "react";
import Data from "./Data";

function NewIndex() {
  const [selected, setSelected] = useState(null);
  const [enableMultiselect, setenableMultiselect] = useState(false);
  const [multiselect, setMultiselect] = useState([]);

  const handleSingleClick = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultipleClick = (getCurrentId) => {
    const copyMultiple = [...multiselect];
    const findIndexofMultiple = copyMultiple.indexOf(getCurrentId);
    if (findIndexofMultiple === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexofMultiple, 1);

    setMultiselect(copyMultiple);
    console.log(copyMultiple, multiselect);
  };

  return (
    <div>
      <div className=" p-4 flex justify-center flex-col items-center  ">
        <button
          className=" p-2  hover:bg-gray-100  border-2 border-black rounded my-2 font-bold 
         "
          onClick={() => setenableMultiselect(!enableMultiselect)}
        >
          Click MultiSelect
        </button>
        {Data.map((dataItem) => (
          // eslint-disable-next-line react/jsx-key
          <div className=" flex justify-between p-4 flex-col  w-1/2 ">
            <div className=" flex justify-between rounded-xl flex-row w-full bg-indigo-800 py-2 px-4 ">
              <h1 className=" text-xl text-white">{dataItem.question}</h1>
              <span
                onClick={
                  enableMultiselect
                    ? () => handleMultipleClick(dataItem.id)
                    : () => handleSingleClick(dataItem.id)
                }
                className=" cursor-pointer hover:bg-indigo-900  px-2 text-2xl font-bold text-cyan-50"
              >
                +
              </span>
            </div>
            <div>
              {enableMultiselect
                ? multiselect.indexOf(dataItem.id) !== -1 && (
                    <div className=" ">
                      <p className="bg-blue-300 my-2 py-2">
                        {dataItem.answere}
                      </p>
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className=" ">
                      <p className="bg-blue-300 my-2 py-2">
                        {dataItem.answere}
                      </p>
                    </div>
                  )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewIndex;
