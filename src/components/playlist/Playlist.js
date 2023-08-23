import SongItem from "./SongItem";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

function PlaylistHeader({ moodSelection }) {
  return (
    <Typography
      variant="h3"
      sx={{ fontWeight: "bold", textAlign: "center", padding: 3 }}
    >
      {moodSelection} Playlist
    </Typography>
  );
}

function Playlist({ songs, moodSelection }) {
  return (
    // Margin - on extra small screens, playlist fits the entire width.
    // Otherwise take away space from left and right sides
    <Box
      sx={{
        backgroundColor: "rgba(0,0,0,0.1)",
        marginTop: 2,
        marginBottom: 2,
        marginLeft: { sm: "20%" },
        marginRight: { sm: "20%" },
      }}
    >
      <PlaylistHeader moodSelection={moodSelection} />
      <Divider sx={{ borderBottomWidth: 5 }} />
      {songs.map((song, index) => (
        <SongItem key={index} name={song.name} artist={song.artist} />
      ))}
    </Box>
  );
}

export default Playlist;
