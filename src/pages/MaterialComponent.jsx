import React from "react";
import { Button, Typography } from "@mui/material";

const MaterialComponent = () => {
  const test = false;
  return (
    <div>
      <Typography gutterBottom={false} variant="h2">
        This is my app
      </Typography>
      <Typography variant="h6" paragraph={true} sx={{ fontSize: "18px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        perferendis voluptas esse quidem beatae id? Consequuntur animi rerum
        architecto quam?
      </Typography>
      <Typography variant="myVariant">Custom Variant</Typography>
      <Button color="secondary" variant="contained">
        Hello
      </Button>
      <Button
        sx={[
          {
            p: 1,
            ml: 2,
            fontWeight: "900",
            color: "primary.main",
            backgroundColor: "custom.main",
          },
          test && {
            backgroundColor: "black",
            color: "white",
          },
        ]}
        color="secondary"
        variant="outlined"
      >
        Sx styled
      </Button>
      <Button
        variant="contained"
        sx={{
          display: "block",
          maxWidth: {
            xs: 200,
            sm: 300,
            md: 400,
            lg: 500,
            xl: 600,
          },
          fontSize: {
            xs: "14px",
            sm: 18,
            md: "32px",
          },
          mt: 2,
        }}
      >
        Responsive
      </Button>
    </div>
  );
};

export default MaterialComponent;
