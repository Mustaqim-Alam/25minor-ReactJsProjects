import { useState } from "react";

function Random() {
  const [typeofColor, setTypeofColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  // #fff

  const colorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  function handleCreateRGBcolor() {
    const r = colorUtility(255);
    const g = colorUtility(255);
    const b = colorUtility(255);

    setColor(`rgb(${r}, ${g}, ${b})`);
    console.log(color);
  }

  function handleCreateHEXcolor() {
    let hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[colorUtility(hex.length)];
    }
    setColor(hexColor);
    console.log(hexColor);
  }

  return (
    <>
    <h1 className=" text-3xl bg-pink-950 mt-1 py-4">Random Color Generator</h1>
      <div
        style={{ background: color }}
        className="flex flex-col  item-center w-full h-screen"
      >
        <div className="flex justify-around flex-row h-16 w-full">
          <button
            className=" bg-gray-400 p-3 rounded-xl mt-2 "
            onClick={() => setTypeofColor("hex")}
          >
            Switch HEX Color
          </button>
          <button
            className=" bg-gray-400 p-3 rounded-xl mt-2"
            onClick={() => setTypeofColor("rgb")}
          >
            Switch RGB Color
          </button>
          <button
            className=" bg-red-600 p-3 rounded-xl mt-2"
            onClick={
              typeofColor === "hex"
                ? handleCreateHEXcolor
                : handleCreateRGBcolor
            }
          >
            Create Random Color
          </button>
        </div>
        <div className=" flex-col text-white w-full   h-full flex justify-center items-center">
          <h1 className=" text-3xl">{typeofColor} color </h1>
          <span>{color}</span>
        </div>
      </div>
    </>
  );
}

export default Random;
