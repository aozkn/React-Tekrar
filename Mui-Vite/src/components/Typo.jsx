//?Brings all Library and take the selected files
// import { Typography } from "@mui/material";
//?Only brings the needed files
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
const Typo = () => {
  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: " 1px solid tomato",
      }}
    >
      <Typography variant="h6" component="h1" color="lightcoral" mt={4}>
        MUI Typo
      </Typography>
      <Typography variant="button">Button Text</Typography>
      <Typography variant="subtitle2" color="blue">
        MUI Typo
      </Typography>
      <Typography variant="body1" color="red">
        Body Type
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "greenyellow", backgroundColor: "violet", mt: "1rem" }}
        align="center"
      >
        SX PROP
      </Typography>
    </Box>
  );
};

export default Typo;
