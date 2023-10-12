import { Button, TextField, Typography } from "@mui/material";
import useLocalStorage from "../customHooks/useLocalStorage";
import { useState } from "react";

const StorageA = () => {
  const [saveItem, deleteItem, getItem] = useLocalStorage();
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [item, setItem] = useState("");

  return (
    <div>
      <TextField
        label="key"
        onChange={(e) => {
          setKey(e.target.value);
        }}
      />

      <TextField
        label="value"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          saveItem(key, value);
        }}
      >
        Add Item
      </Button>

      <Button variant="contained" onClick={() => deleteItem(key)}>
        Delete Item
      </Button>

      <Button
        variant="contained"
        onClick={() => setItem(getItem(key) as string)}
      >
        Show Item
      </Button>

      <Typography variant="h4">{item}</Typography>
    </div>
  );
};

export default StorageA;
