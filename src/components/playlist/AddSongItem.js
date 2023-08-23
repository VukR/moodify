import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";

function AddSongItem() {
  return (
    <ListItem>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton sx={{ padding: 0, borderRadius: 0 }}>
          <Typography sx={{ marginRight: 1 }}>Add a song</Typography>
          <ControlPointIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
}

export default AddSongItem;
