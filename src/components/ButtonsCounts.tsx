import Button from "@mui/material/Button";
import useCount from "../customHooks/useCount";
import Typography from "@mui/material/Typography";

const ButtonsCounts = () => {
  const [countGreen, increaseGreen] = useCount();
  const [countBlue, increaseBlue] = useCount();

  return (
    <div>
      <Button
        onClick={() => increaseGreen()}
        variant="contained"
        sx={{ background: "green" }}
      >
        Green
      </Button>
      <Typography variant="h1">{countGreen}</Typography>
      <Button onClick={() => increaseBlue()} variant="contained">
        Blue
      </Button>
      <Typography variant="h1">{countBlue}</Typography>
    </div>
  );
};

export default ButtonsCounts;
