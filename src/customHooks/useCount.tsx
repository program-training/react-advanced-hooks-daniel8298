// import { useState } from "react";

// const useCount = () => {
//   const [countBlue, setCountBlue] = useState(0);
//   const [countGreen, setCountGreen] = useState(0);
//   const [countMouseOver, setCountMouseOver] = useState(0);

//   const increaseBlue = () => setCountBlue(countBlue + 1);
//   const increaseGreen = () => setCountGreen(countGreen + 1);
//   const increaseMouseOver = () => setCountMouseOver(countMouseOver + 1);

//   return {
//     increaseBlue,
//     countBlue,
//     increaseGreen,
//     countGreen,
//     increaseMouseOver,
//     countMouseOver,
//   };
// };

// export default useCount;

import { useState } from "react";

const useCount = (): [number, () => void] => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);

  return [count, increase];
};

export default useCount;
