import { Box, IconButton, Typography } from "@mui/material";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface Props {
  currentValue: number;
  maxValue: number;

  updateQuantity: (newValue: number) => void;
}

export const ItemCounter = ({
  currentValue,
  maxValue,
  updateQuantity,
}: Props) => {
  const addOrRemove = (value: number) => {
    if (value === -1) {
      if (currentValue === 1) return;

      return updateQuantity(currentValue - 1);
    }

    if (currentValue >= maxValue) return;

    updateQuantity(currentValue + 1);
  };
  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={() => addOrRemove(-1)}>
        <RemoveCircleOutlineIcon />
      </IconButton>

      <Typography sx={{ width: 40, textAlign: "center" }}>
        {currentValue}
      </Typography>

      <IconButton onClick={() => addOrRemove(+1)}>
        <AddCircleOutlineIcon />
      </IconButton>
    </Box>
  );
};
