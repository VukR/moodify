import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function TitleText() {
  return (
    // Typography prop overwrites other style props - can't set fontWeight
    // Do it with a span component
    <Typography sx={{ typography: { xs: "h2", sm: "h1" } }}>
      <Box component="span" sx={{ fontWeight: "bold" }}>
        What{" "}
        <Box component="span" sx={{ color: "white" }}>
          mood{" "}
        </Box>
        are you in?
      </Box>
    </Typography>
  );
}

export default TitleText;
