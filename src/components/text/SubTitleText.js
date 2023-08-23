import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function SubTitleText() {
  return (
    <Typography sx={{ typography: { xs: "h6", sm: "h4" } }}>
      Select a{" "}
      <Box component="span" sx={{ color: "white" }}>
        mood{" "}
      </Box>
      below and browse a curated playlist!
    </Typography>
  );
}

export default SubTitleText;
