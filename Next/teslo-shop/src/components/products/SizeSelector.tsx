import { ISize } from "@/src/interfaces";
import { Box, Button } from "@mui/material";

interface Props {
  selectedSize?: ISize;
  sizes: ISize[];

  onSelectedSize: (size: ISize) => void;
}

export const SizeSelector = ({
  selectedSize,
  sizes,
  onSelectedSize,
}: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      gap={2}
      mt={2}
    >
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
          className={selectedSize === size ? "primary-btn" : "info"}
          onClick={() => onSelectedSize(size)}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};
