import MoodItem from "./MoodItem";

import Grid from "@mui/material/Grid";

function MoodsDisplay({ handleMoodClick, moods, moodSelection }) {
  return (
    // Take advantage of grid flex and columns to display moods in 2 dimensions dynamically
    <Grid container spacing={2}>
      {moods.map((mood, index) => (
        <Grid key={index} item xs={6} sm={3}>
          <MoodItem
            handleMoodClick={handleMoodClick}
            mood={mood.type}
            image={mood.image}
            moodSelection={moodSelection}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default MoodsDisplay;
