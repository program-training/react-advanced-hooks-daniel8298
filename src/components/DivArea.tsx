import useCount from "../customHooks/useCount";
import Typography from "@mui/material/Typography";

const DivArea = () => {
  const [countMouseOver, increaseMouseOver] = useCount();

  return (
    <>
      <div
        style={{ width: "150px", height: "150px", background: "yellow" }}
        onMouseOver={() => increaseMouseOver()}
      ></div>
      <Typography variant="h1">{countMouseOver}</Typography>
    </>
  );
};

export default DivArea;
