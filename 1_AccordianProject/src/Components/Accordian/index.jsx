import { useState } from "react";
import Data from "./Data";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiselect, setenableMultiselect] = useState(false);
  const [multiselect, setMultiselect] = useState([]);

  function handleSingleClick(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
    console.log(selected);
  }

  function handleMultipleClick(getCurrentId) {
    // setMultiselect(getCurrentId);
    // setSelected(getCurrentId)
    // console.log(enableMultiselect);
    const copyMulti = [...multiselect];
    const findIndexofMultiple = copyMulti.indexOf(getCurrentId);
    if (findIndexofMultiple === -1) copyMulti.push(getCurrentId);
    else copyMulti.splice(findIndexofMultiple, 1);

    setMultiselect(copyMulti);
    console.log(copyMulti, multiselect);
  }

  return (
    <div className=" h-full flex  content-center flex-col justify-center bg-fuchsia-400  cursor-pointer ">
      <button
        className=" bg-red-600  cursor-pointer "
        onClick={() => setenableMultiselect(!enableMultiselect)}
      >
        {" "}
        Multi Selection Accordian{" "}
      </button>
      <div>
        {Data &&
          Data.map((dataItem) => (
            <div key={dataItem.id}>
              <div
                onClick={
                  enableMultiselect
                    ? () => handleMultipleClick(dataItem.id)
                    : () => handleSingleClick(dataItem.id)
                }
                className=" bg-gray-300 m-2 p-2     "
              >
                <h1 className="cursor-pointer ">{dataItem.question}</h1>
                <span className="cursor-pointer ">+</span>
                <div className=" m-2 bg-blue-400">
                  {/* {enableMultiselect ? (
                    multiselect === dataItem.id ? (
                      <div>{dataItem.answere}</div>
                    ) : null 
                  ) : selected === dataItem.id ? (
                    <div>{dataItem.answere}</div>
                  ) : null} */}
                  {enableMultiselect
                    ? multiselect.indexOf(dataItem.id) !== -1 && (
                        <div>{dataItem.answere}</div>
                      )
                    : selected === dataItem.id && <div>{dataItem.answere}</div>}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Accordian;
