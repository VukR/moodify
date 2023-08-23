import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function MoodItem({ handleMoodClick, mood, image, moodSelection }) {
  return (
    <Box
      sx={{
        borderRadius: 30,
        backgroundColor:
          moodSelection === mood
            ? "rgba(255, 255, 255, 0.7)"
            : "rgba(0,0,0,0.1)",
        height: 150,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        cursor: "pointer",
      }}
      onClick={() => handleMoodClick(mood)}
    >
      <Box
        component="img"
        sx={{ height: 100, width: 100 }}
        src={`assets/${image}`}
        alt={image}
      />
      <Typography>{mood}</Typography>
    </Box>
  );
}

export default MoodItem;
